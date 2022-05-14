import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { auth } from "./interface/authentification/authRouter";
import { videoRouter } from "./interface/video/video";
import { authenticateToken } from "./interface/authentification/authentificateToken";

const server = express();

const { PORT, MODE } = process.env;

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use("/auth", auth);
server.use("/videos", authenticateToken, videoRouter);

server.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(PORT || 3000, () => {
  console.log({ MODE });
  console.log("Sql node is on 3000");
});
