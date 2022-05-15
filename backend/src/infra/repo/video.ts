import { User } from "../../domain/user";
import { Video } from "../../domain/video";

export async function getRepoVideos(user?: User): Promise<Video[]> {
  return [];
}
export async function getRepoVideo(id?: number): Promise<Video> {
  return {} as Video;
}
