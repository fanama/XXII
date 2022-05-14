import { User } from "./user";

export interface Video {
  id: number;
  name: string;
  imageUrl?: string;
  path: string;
  uploader: User;
}
