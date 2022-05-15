import { User } from "../domain/user";
import { usersMock } from "./mock/user";
import { userRepoGetter, userRepoLogin } from "./repo/user";

export async function userInfraLogin(user: User): Promise<boolean> {
  if (process.env.MODE == "mock") {
    return usersMock.some(
      (u) => u.username == user.username && u.password == user.password
    );
  }

  return userRepoLogin(user);
}

export async function getInfraUser(id: number): Promise<User | undefined> {
  if (process.env.MODE == "mock") {
    return usersMock.find((u) => u.id == id);
  }

  return userRepoGetter(id);
}
