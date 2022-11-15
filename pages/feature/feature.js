import {FiX} from 'react-icons/fi'
import styles from '../feature/index.module.scss'

const Feature = () => {
    return (
        <div className={styles.part}>
            <div className={styles.feat}>
                <h3>Featured adventure</h3>
                <div className={styles.close}>
                    <p>close</p>
                    <FiX className={styles.time} />
                </div>
            </div>
        </div>
    );
}

export default Feature;