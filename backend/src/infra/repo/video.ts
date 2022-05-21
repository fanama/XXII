import { UploadedFile } from "express-fileupload";
import { User } from "../../domain/user";
import { Video } from "../../domain/video";
import { VideoBuilder } from "./model/video";

export async function uploadRepoVideo(
  file: UploadedFile,
  uploadPath: string,
  user: User
) {
  try {
    file.mv(uploadPath, (err) => {
      console.log(err);
    });

    const video: Video = {
      name: file.name,
      path: uploadPath,
      uploader: user,
    };

    await VideoBuilder.create(video);

    return true;
  } catch (err) {
    return false;
  }
}

export async function getRepoVideos(user?: User): Promise<Video[]> {
  const videos = await VideoBuilder.find({ uploader: user });
  console.log(videos);
  return videos;
}
export async function getRepoVideo(id?: string): Promise<Video> {
  return {} as Video;
}
