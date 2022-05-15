import express from "express";
import { User } from "../../domain/user";
import { getInfraUser } from "../../infra/user";
import {
  getInfraVideo,
  getInfraVideos,
  uploadInfraVideo,
} from "../../infra/video";

export const videoRouter = express.Router();

videoRouter.get("/", async (req, res) => {
  res.send({
    "get video of a user": "/user/:id",
    "get video by id": "/id/:id",
    "upload video": "/upload",
  });
});
videoRouter.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getInfraUser(parseInt(id));
  res.send(await getInfraVideos(user));
});

videoRouter.get("/id/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  res.send(await getInfraVideo(id));
});

videoRouter.post("/upload", async (req, res) => {
  const { video } = req.body;

  res.send(await uploadInfraVideo());
});
