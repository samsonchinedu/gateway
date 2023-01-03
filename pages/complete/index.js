import Adventure from "../adventure/index.js";
import Level from "../level/level.js";
import styles from './style.module.scss'
import { useRouter } from 'next/router'

const Complete = () => {
    const router = useRouter()

    const onProgress = () => {
        router.push('/progress')
    }

    const onBack = () => {
        router.push('/')
    }

    return (
        <div className={styles.complete}>
            <div className={styles.adventures}>
                <div className={styles.adven}>
                    <h3 onClick={onBack}>All Adventures</h3>
                    <h3 onClick={onProgress}>In-Progress</h3>
                    <h3 className={styles.active}>Completed</h3>
                </div>
                <div className={styles.line}></div>
            </div>
            <Level />
            <Adventure />
        </div>
    );
}

export default Complete;