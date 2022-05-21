import { User } from "./user";

export interface Video {
  id?: number;
  _id?: string;
  name: string;
  imageUrl?: string;
  path: string;
  uploader: User;
}
