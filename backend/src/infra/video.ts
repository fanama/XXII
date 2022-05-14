import { User } from "../domain/user";
import { Video } from "../domain/video";
import { videoMock } from "./mock/video";
const { MODE } = process.env;

export async function getInfraVideos(user?: User): Promise<Video[]> {
  if (MODE == "mock") {
    if (user?.isAdmin) return videoMock;
    return videoMock.filter((video) => video.uploader.id == user?.id);
  }
  return [];
}

export async function uploadInfraVideo(): Promise<boolean> {
  console.log(process.mainModule?.path);
  return true;
}
