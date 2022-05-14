import express from "express";
import * as dotenv from "dotenv";
import { auth } from "./interface/authentification/authRouter";
import { videoRouter } from "./interface/video/video";
import { authenticateToken } from "./interface/authentification/authentificateToken";

dotenv.config();
const server = express();

const { PORT } = process.env;

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use("/auth", auth);
server.use("/videos", authenticateToken, videoRouter);

server.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(PORT || 3000, () => {
  console.log("Sql node is on 3000");
});
