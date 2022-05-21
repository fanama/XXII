import { User } from "../../domain/user";
import { UserBuilder } from "./model/user";

export async function userRepoCreate(user: User): Promise<boolean> {
  await UserBuilder.create(user);
  const users = await UserBuilder.find(user);
  console.log({ users });
  return users.length > 0;
}
export async function userRepoLogin(user: User): Promise<boolean> {
  const users = await UserBuilder.find(user);
  console.log({ users });
  return users.length > 0;
}

export async function userRepoGetter(id: string): Promise<User> {
  const filter = { _id: id };
  const users = await UserBuilder.findOne(filter);
  return users || ({} as User);
}
