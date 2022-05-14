import express from "express";
import { User } from "../../domain/user";
import { userInfraLogin } from "../../infra/user";
import { generateAccessToken } from "./authentificateToken";

export const auth = express.Router();
auth.get("/", async (req, res) => {
  res.send({
    "sign in": "/login",
  });
});
auth.post("/login", async (req, res) => {
  const { username, password, isAdmin } = req.body;

  if (!(await userInfraLogin({ username, password } as User))) {
    res.status(401).send("wrong password or username");
    return;
  }

  const accessToken = generateAccessToken({ username, isAdmin } as User);

  res.json({ accessToken });
});
