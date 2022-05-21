import express from "express";
import { UploadedFile } from "express-fileupload";
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
  const user = await getInfraUser(id);
  res.send(await getInfraVideos(user));
});

videoRouter.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  res.send(await getInfraVideo(id));
});

videoRouter.post("/upload", async (req, res) => {
  const { id } = req.query;

  const user = await getInfraUser(`${id}`);
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(500).send(false);
    return;
  }

  if (!user) {
    return res.status(500).send("error");
  }

  const sampleFile: UploadedFile | any = req.files.video;
  res.send(await uploadInfraVideo(sampleFile, user));
});
