import express from "express";
import coockieParser from "cookie-parser";

import { auth } from "./authentification/authRouter";
import { videoRouter } from "./video/video";
import { authenticateToken } from "./authentification/authentificateToken";

export const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(coockieParser());
server.use("/auth", auth);
server.use("/mp4", express.static("../../videos"));
server.use("/videos", authenticateToken, videoRouter);

server.get("/", (req, res) => {
  res.send("hello world");
});