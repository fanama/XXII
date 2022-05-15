import type { NextPage } from "next";
import { Videos } from "../components/Videos";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Videos />
    </div>
  );
};

export default Home;
