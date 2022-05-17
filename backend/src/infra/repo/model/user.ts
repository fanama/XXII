import { model, Schema } from "mongoose";
import { User } from "../../../domain/user";

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

export const UserBuilder = model<User>("user", userSchema);
