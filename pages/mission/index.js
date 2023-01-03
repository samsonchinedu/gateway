import Head from "next/head";
import Content from "../main";
import Sidebar from '../side';
import styles from './index.module.scss';

const Mission = () => {
    return (
        <div className={styles.mission}>
            <Head>
                <title>Misson | Learning Process</title>
                <meta name="description" content="Gateway Project" />
            </Head>
            <Sidebar />
            <Content />
        </div>
    );
}

export default Mission;