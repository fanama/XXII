import axios from "axios";
import { User } from "../../domain/user";
import { Video } from "../../domain/video";

export async function getRepoVideos(user?: User): Promise<Video[]> {
  try {
    const res = await axios.get(`/server/videos/user/${user?._id}`);
    return res.data;
  } catch (e) {}
  return [];
}
export async function getRepoVideo(id?: number): Promise<Video> {
  return {} as Video;
}

export async function uploadRepoVideo(
  formData: FormData,
  idUser: string
): Promise<boolean> {
  try {
    await axios.post("/server/videos/upload?id=" + idUser, formData);
    return true;
  } catch (err) {
    return false;
  }
}
