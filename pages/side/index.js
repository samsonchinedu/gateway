import styles from "./index.module.scss"
import { FiChevronDown } from "react-icons/fi"

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.container}>
                <div className={styles.topic}>
                    <img src="/image-10.png" />
                    <h1>Smart Contracts and their Advantages</h1>
                </div>

                <div className={styles.modules}>
                    <h1>Modules</h1>

                    <div className={styles.frames}>
                        <div className={styles.header}>
                            <h5>Mission 1</h5>
                            <FiChevronDown className={styles.fang} />
                        </div>
                        <div className={styles.column}>
                            <div className={styles.active}>What are Contracts?</div>
                            <div>What are Smart Contracts then?</div>
                            <div>Quiz</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;