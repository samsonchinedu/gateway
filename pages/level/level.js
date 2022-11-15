import styles from '../level/style.module.scss'
import { FaAngleDown } from "react-icons/fa";

const Level = () => {
    return (
        <div className={styles.level}>
            <div className={styles.buttons}>
                <div className={styles.main}>
                    <p>Beginner level</p>
                    <FaAngleDown />
                </div>
            </div>
            <div className={styles.input}>
                <input type="search" />
                <button>Search for adventures</button>
            </div>
        </div>
    );
}

export default Level;