import mongoose, { Schema, Document } from "mongoose";

export interface IAuth extends Document {
  email?: string;
  mobile?: string;
  password?: string;
  name?: string;
  avatar?: string;
  googleId?: string;
  _id: mongoose.Types.ObjectId;
}

const AuthSchema: Schema = new Schema(
  {
    email: { type: String, unique: true, sparse: true },
    mobile: { type: String, unique: true, sparse: true },
    password: { type: String },
    name: { type: String },
    avatar: { type: String },
    googleId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IAuth>("Auth", AuthSchema);