import express from "express";
import { User } from "../../domain/user";
import { userInfraCreate, userInfraLogin } from "../../infra/user";
import { generateAccessToken } from "./authentificateToken";

export const auth = express.Router();
auth.get("/", async (req, res) => {
  res.send({
    "sign in": "/login",
    "create user": "/user",
  });
});
auth.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userInfraLogin({ username, password } as User);
  if (!user || user._id == "") {
    res.status(401).send("wrong password or username");
    return;
  }

  const accessToken = generateAccessToken({ username } as User);
  res
    .cookie("accessToken", accessToken)
    .json({ accessToken, userId: user._id, admin: user.isAdmin });
});

auth.post("/user", async (req, res) => {
  const { username, password, isAdmin } = req.body;

  if (!(await userInfraCreate({ username, password, isAdmin } as User))) {
    res.status(401).send("can't create this user");
    return;
  }

  const accessToken = generateAccessToken({ username, isAdmin } as User);
  res
    .cookie("accessToken", accessToken)
    .cookie("test", "test")
    .json({ accessToken });
});
