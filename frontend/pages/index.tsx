import axios from "axios";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <button onClick={() => axios.get("/server/auth")}>test</button>
    </div>
  );
};

export default Home;
