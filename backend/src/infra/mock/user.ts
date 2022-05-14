import { User } from "../../domain/user";

export const usersMock: User[] = [
  {
    id: 1,
    username: "fana",
    password: "fana",
    isAdmin: true,
  },
  {
    id: 2,
    username: "test",
    password: "test",
    isAdmin: false,
  },
];
