import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { Videos } from "../components/Videos";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container + "flex flex-column gap-1 m-1"}>
      <Navbar />
      <Videos />
    </div>
  );
};

export default Home;
