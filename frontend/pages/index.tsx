import type { NextPage } from "next";
import { useLogin } from "../components/Login/useLogin";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { user, updateUser, logUser } = useLogin();

  return (
    <div className={styles.container}>
      <input name="username" value={user.username} onChange={updateUser} />
      <input name="password" value={user.password} onChange={updateUser} />
      <button onClick={logUser}>log in</button>
    </div>
  );
};

export default Home;
