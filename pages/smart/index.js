import {HiGift} from 'react-icons/hi'
import styles from '../smart/smart.module.scss'
import { useRouter } from 'next/router'

const SmartTask = () => {
    const router = useRouter()

    const onButton = () => {
        router.push('/mission')
    }

    return (
        <div>
            <div className={styles.wrap}>
                <div className={styles.image}>
                    <img src="/image-3.png"/>
                </div>
                <div className={styles.details}>
                    <h1>Smart Contracts and their Advantages</h1>
                    <div className={styles.adventureTracker}>
                        <div className={styles.join}>
                            <img src="/image-4.png" />
                            <span>45 Comrades have joined</span>
                        </div>
                        <div className={styles.reward}>
                            <HiGift className={styles.gift} />
                            <span>200 reward points</span>
                        </div>
                    </div>
                    <button className={styles.span} onClick={onButton}>start this Adventure</button>
                </div>
            </div>
        </div>
    );
}

export default SmartTask;