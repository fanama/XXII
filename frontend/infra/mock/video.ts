import { Video } from "../../domain/video";
import { usersMock } from "./user";

export const videoMock: Video[] = [
  {
    id: 1,
    name: "video1.mp4",
    imageUrl: "",
    path: "",
    uploader: usersMock[0],
  },
  {
    id: 2,
    name: "video2.mp4",
    imageUrl: "",
    path: "",
    uploader: usersMock[0],
  },
  {
    id: 3,
    name: "video3.mp4",
    imageUrl: "",
    path: "",
    uploader: usersMock[1],
  },
];
