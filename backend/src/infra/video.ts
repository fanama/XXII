import { UploadedFile } from "express-fileupload";
import { User } from "../domain/user";
import { Video } from "../domain/video";
import { videoMock } from "./mock/video";
import { getRepoVideo, getRepoVideos } from "./repo/video";

export async function getInfraVideos(user?: User): Promise<Video[]> {
  if (process.env.MODE == "mock") {
    if (user?.isAdmin) return videoMock;
    return videoMock.filter((video) => video.uploader.id == user?.id);
  }
  return await getRepoVideos(user);
}
export async function getInfraVideo(id: number): Promise<Video> {
  if (process.env.MODE == "mock") {
    return videoMock.filter((video) => video.id == id)[0];
  }
  return getRepoVideo(id);
}

export async function uploadInfraVideo(file: UploadedFile): Promise<boolean> {
  const uploadPath = process.mainModule?.path + "/videos/" + file.name;
  if (process.env.MODE == "mock") {
    console.log({ uploadPath });
    return true;
  }
  try {
    file.mv(uploadPath, (err) => {
      console.log(err);
    });
    return true;
  } catch (err) {
    return false;
  }
}
