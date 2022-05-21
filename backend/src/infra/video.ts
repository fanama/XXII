import { UploadedFile } from "express-fileupload";
import { User } from "../domain/user";
import { Video } from "../domain/video";
import { videoMock } from "./mock/video";
import { getRepoVideo, getRepoVideos, uploadRepoVideo } from "./repo/video";
import { getInfraUser } from "./user";

export async function getInfraVideos(user?: User): Promise<Video[]> {
  if (process.env.MODE == "mock") {
    if (user?.isAdmin) return videoMock;
    return videoMock.filter((video) => video.uploader.id == user?.id);
  }
  return await getRepoVideos(user);
}
export async function getInfraVideo(id: string): Promise<Video> {
  if (process.env.MODE == "mock") {
    return videoMock.filter((video) => video._id == id)[0];
  }
  const user = await getInfraUser(id);
  return getRepoVideo(id);
}

export async function uploadInfraVideo(
  file: UploadedFile,
  user: User
): Promise<boolean> {
  const uploadPath = process.mainModule?.path + "/videos/" + file.name;
  if (process.env.MODE == "mock") {
    console.log({ uploadPath });
    return true;
  }
  return await uploadRepoVideo(file, uploadPath, user);
}
