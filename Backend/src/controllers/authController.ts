import bcrypt from "bcrypt";
import Auth, { IAuth } from "../model/authModel";
import { Request, Response } from "express";
import jwt, { SignOptions } from "jsonwebtoken";
import axios from "axios";

interface GoogleProfile {
  email: string;
  name: string;
  picture: string;
  id: string;
}


export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, mobile, password } = req.body;

    const query: any[] = [];
    if (email) query.push({ email });
    if (mobile) query.push({ mobile });

    if (query.length > 0) {
      const existingUser = await Auth.findOne({ $or: query });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User with this email or mobile already exists",
        });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserData: any = { password: hashedPassword };
    if (email) newUserData.email = email;
    if (mobile) newUserData.mobile = mobile;

    const newUser = await Auth.create(newUserData);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        mobile: newUser.mobile,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



export const loginUser = async (req: Request, res: Response) => {

  try {

    const { email, mobile, password } = req.body

    const query: any[] = []

    if (mobile) query.push({ mobile })
    if (email) query.push({ email })

    if (query.length > 0) {

      const userExist = await Auth.findOne({ $or: query })

      if (!userExist) {
        return res.status(400).json({
          success: false,
          message: "User not exists",
        });
      }

      const passwordCompare = await bcrypt.compare(password, userExist.password || "");

      if (!passwordCompare) {
        return res.status(400).json({
          success: false,
          message: "Email or password is wrong",
        });
      }

      const secretKey = process.env.SECRET_KEY as string

      const token = jwt.sign(
        { userId: userExist?._id, userEmail: userExist?.email || null, userMobile: userExist?.mobile || null },
        secretKey,
        { expiresIn: "1h" } as SignOptions
      );

      return res.status(201).json({
        success: true,
        message: "User logged in successfully",
        token,
      });
    }

  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }

}


export const googleAuth = async (req: Request, res: Response): Promise<void> => {
  try {
    const redirectUri = "http://localhost:5000/auth/google/callback";
    const clientId = process.env.GOOGLE_CLIENT_ID as string;

    const scope = [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" ");

    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline`;

    res.redirect(url);
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(500).send("Authentication initialization failed");
  }
};


export const googleAuthCallback = async (req: Request, res: Response): Promise<void> => {
  const code = req.query.code as string;

  if (!code) {
    res.status(400).send("Authorization code missing");
    return;
  }

  try {
    // Exchange code for tokens
    const { data } = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID as string,
      client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
      redirect_uri: "http://localhost:5000/auth/google/callback",
      grant_type: "authorization_code",
    });

    const { access_token } = data;

    // Get user profile info
    const { data: profile } = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const user = await Auth.findOneAndUpdate(
      { email: profile.email },
      {
        name: profile.name,
        email: profile.email,
        avatar: profile.picture,
        googleId: profile.id,
      },
      { upsert: true, new: true }
    ) as IAuth;

    if (!user) {
      res.status(500).send("User synchronization failed");
      return;
    }

    // Create your own JWT
    const token = jwt.sign(
      { id: user._id.toString() },
      process.env.SECRET_KEY as string,
      { expiresIn: "1h" }
    );

    // Store JWT in httpOnly cookie
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: false, // ⚠️ set true in production (HTTPS)
      sameSite: "lax",
    });

    // Redirect back to frontend dashboard
    res.redirect("http://localhost:3000/dashboard");

  } catch (err) {
    console.error("Google Auth Callback Error:", err);
    res.status(500).send("Authentication failed");
  }
};