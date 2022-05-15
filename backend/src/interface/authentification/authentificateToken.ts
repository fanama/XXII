import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { User } from "../../domain/user";

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];
  let token =
    (authHeader && authHeader.split(" ")[1]) || req.cookies.accessToken;
  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    JSON.stringify(process.env.ACCESS_TOKEN_SECRET),
    (err: any) => {
      if (err) return res.sendStatus(403);
      next();
    }
  );
}
export function generateAccessToken(user: User) {
  return jwt.sign(
    user.username,
    JSON.stringify(process.env.ACCESS_TOKEN_SECRET)
  );
}
