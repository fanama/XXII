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

export async function uploadInfraVideo(): Promise<boolean> {
  console.log(process.mainModule?.path);
  return true;
}
