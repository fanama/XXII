import { model, Schema } from "mongoose";
import { Video } from "../../../domain/video";
import { userSchema } from "./user";

const videoSchema = new Schema<Video>({
  name: { type: String, required: true },
  path: { type: String, required: true },
  uploader: { type: userSchema, required: true },
});

export const VideoBuilder = model<Video>("videos", videoSchema);
