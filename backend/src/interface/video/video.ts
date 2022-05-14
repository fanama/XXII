import express from "express";

export const videoRouter = express.Router();

videoRouter.get("/", (req, res) => {
  res.send("all vidéos");
});

videoRouter.get("/id/:id", (req, res) => {
  res.send("get video id : " + req.params.id);
});

videoRouter.post("/upload", (req, res) => {
  const { video } = req.body;
  res.send({ video });
});
