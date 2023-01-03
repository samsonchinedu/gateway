import Adventure from "../adventure/index.js";
import Level from "../level/level.js";
import styles from './style.module.scss'
import { useRouter } from 'next/router'

const Progress = () => {
    const router = useRouter()

    const onBack = () => {
        router.push('/')
    }

    const onComplete = () => {
        router.push('/complete')
    }

    return ( 
        <div className={styles.progress}>
            <div className={styles.adventures}>
                <div className={styles.adven}>
                    <h3 onClick={onBack}>All Adventures</h3>
                    <h3 className={styles.active}>In-Progress</h3>
                    <h3 onClick={onComplete}>Completed</h3>
                </div>
                <div className={styles.line}></div>
            </div>
            <Level />
            <Adventure />
        </div>
    );
}

export default Progress;