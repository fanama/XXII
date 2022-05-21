import type { NextPage } from "next";
import { useLogin } from "../components/Login/useLogin";
import { useStyle } from "../hooks/useStyle";
import Image from "next/image";
import style from "../styles/login.module.scss";

const Home: NextPage = () => {
  const { user, updateUser, logUser } = useLogin();
  const { formTail, inputTail, buttonTail, labelTail } = useStyle();

  return (
    <div className={formTail + style.form}>
      <Image src="/logo.svg" width={70} height={70} />
      <label className={labelTail}> login </label>
      <input
        className={inputTail}
        name="username"
        value={user.username}
        onChange={updateUser}
      />
      <input
        type="password"
        className={inputTail}
        name="password"
        value={user.password}
        onChange={updateUser}
      />
      <button className={buttonTail} onClick={logUser}>
        log in
      </button>
    </div>
  );
};

export default Home;
