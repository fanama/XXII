import { User } from "../../domain/user";

export async function userRepoLogin(user: User): Promise<boolean> {
  return false;
}

export async function userRepoGetter(id: number): Promise<User> {
  return {} as User;
}
