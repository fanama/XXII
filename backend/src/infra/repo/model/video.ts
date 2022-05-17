import { model, Schema } from "mongoose";
import { Video } from "../../../domain/video";

const videoSchema = new Schema<Video>({
  name: { type: String, required: true },
  path: { type: String, required: true },
});

export const VideoBuilder = model<Video>("user", videoSchema);
