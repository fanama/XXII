import express from "express";
import { User } from "../../domain/user";
import { generateAccessToken } from "./authentificateToken";

export const auth = express.Router();

auth.post("/login", (req, res) => {
  const { username } = req.body;

  const accessToken = generateAccessToken({ username } as User);

  res.json({ accessToken });
});
