import { User } from "../../domain/user";
import { UserBuilder } from "./model/user";

export async function userRepoLogin(user: User): Promise<boolean> {
  // const filter: User = user;
  const users = await UserBuilder.findOne({});
  console.log({ users });
  return false;
}

export async function userRepoGetter(id: number): Promise<User> {
  const filter = { id };
  const users = await UserBuilder.findOne(filter);
  console.log({ users });
  return {} as User;
}
