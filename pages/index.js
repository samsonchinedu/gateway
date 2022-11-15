import Head from "next/head";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import styles from "../styles/Home.module.css";
import Adventure from "./avdenture/index.js";
import Feature from "./feature/feature.js";
import Level from "./level/level";
import SmartTask from "./smart/index.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gateway | Adventure</title>
        <meta name="description" content="Gateway Project" />
      </Head>
      <main>
        <div className={styles.adventures}>
          <div className={styles.adven}>
            <h3 className={styles.active}>All Adventures</h3>
            <h3>In-Progress</h3>
            <h3>Completed</h3>
          </div>
          <div className={styles.line}></div>
        </div>
        <Feature />
        <SmartTask />
        <Level />
        <Adventure />
        <div className={styles.number}>
          <TfiAngleLeft className={styles.left} />
          <div>
            <span className={styles.active}>1</span>
            <span>2</span>
            <span>...</span>
            <span>9</span>
            <span>10</span>
          </div>
          <TfiAngleRight id={styles.active} />
        </div>
      </main>
    </div>
  );
}
