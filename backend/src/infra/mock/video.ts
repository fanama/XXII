import { Video } from "../../domain/video";
import { usersMock } from "./user";

export const videoMock: Video[] = [
  {
    id: 1,
    name: "YouRaiseMeUp.mp4",
    imageUrl: "",
    path: process.cwd() + "/videos" + "YouRaiseMeUp.mp4",
    uploader: usersMock[0],
  },
  {
    id: 2,
    name: "LemonTree.mp4",
    imageUrl: "",
    path: "",
    uploader: usersMock[1],
  },
];
