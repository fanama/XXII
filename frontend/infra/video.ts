import { User } from "../domain/user";
import { Video } from "../domain/video";
import { videoMock } from "./mock/video";
import { getRepoVideo, getRepoVideos, uploadRepoVideo } from "./repo/video";

export async function getInfraVideos(user?: User): Promise<Video[]> {
  if (process.env.MODE == "mock") {
    if (user?.isAdmin) return videoMock;
    return videoMock.filter(
      (video) =>
        video.uploader.id == user?.id || video.uploader._id == user?._id
    );
  }
  console.log({ user });
  return await getRepoVideos(user);
}
export async function getInfraVideo(id: number): Promise<Video> {
  if (process.env.MODE == "mock") {
    return videoMock.filter((video) => video.id == id)[0];
  }
  return getRepoVideo(id);
}

export async function uploadInfraVideo(formData: FormData): Promise<boolean> {
  if (process.env.MODE == "mock") {
    console.log({ formData });
    return true;
  }

  return await uploadRepoVideo(formData);
}
