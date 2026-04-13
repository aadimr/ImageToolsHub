import { Router } from "express";
// import { googleAuth, googleAuthCallback, loginUser, registerUser } from "../controllers/authController";
// import { validate } from "../middlewares/validate";
// import { userSchema } from "../validations/authValidator";
// import { createUser, listUsers } from "../controllers/user.controller";

const route = Router();

route.get("/health", (_req, res) => {
    res.json({ ok: true, uptime: process.uptime() });
});

// route.post("/register", validate(userSchema), registerUser);
// route.post("/login", validate(userSchema), loginUser);
// route.get("/auth/google", googleAuth);
// route.get("/auth/google/callback", googleAuthCallback);


export default route;