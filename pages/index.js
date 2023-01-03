import Head from "next/head";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import styles from "../styles/Home.module.css";
import Adventure from "./adventure/index.js";
import Feature from "./feature/feature.js";
import Level from "./level/level.js";
import SmartTask from "./smart/index.js";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  
  const onProgress = () => {
    router.push('/progress')
  }

  const onComplete = () => {
    router.push('/complete')
  }

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
            <h3 onClick={onProgress}>In-Progress</h3>
            <h3 onClick={onComplete}>Completed</h3>
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
