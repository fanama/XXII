import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { User } from "../../domain/user";

export function useLogin() {
  const [user, SetUser] = useState<User>({
    username: "",
    password: "",
    isAdmin: false,
  });

  const router = useRouter();

  const updateUser = (e: { target: HTMLInputElement }) => {
    const { name, value } = e.target;
    SetUser({ ...user, [name]: value });
  };

  const logUser = async () => {
    try {
      await axios.post("/server/auth/login", user);
      router.push("/video");
    } catch (err) {
      alert("canot log in");
      console.log(err);
    }
  };

  return { user, updateUser, logUser };
}
