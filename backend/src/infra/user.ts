import { User } from "../domain/user";
import { usersMock } from "./mock/user";
import { userRepoCreate, userRepoGetter, userRepoLogin } from "./repo/user";

export async function userInfraLogin(user: User): Promise<boolean> {
  if (process.env.MODE == "mock") {
    return usersMock.some(
      (u) => u.username == user.username && u.password == user.password
    );
  }

  return userRepoLogin(user);
}
export async function userInfraCreate(user: User): Promise<boolean> {
  if (process.env.MODE == "mock") {
    console.log("created !");
    return true;
  }

  return userRepoCreate(user);
}
export async function getInfraUser(id: string): Promise<User | undefined> {
  if (process.env.MODE == "mock") {
    return usersMock.find((u) => u._id == id);
  }

  return userRepoGetter(id);
}
