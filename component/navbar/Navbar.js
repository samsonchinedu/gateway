import { FaRegBell } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src="/image-1.png" />
      <ul className={styles.link}>
        <li>Home</li>
        <li className={styles.active}>Adventures</li>
        <li>Community</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className={styles.profile}>
        <FaRegBell className={styles.icon} />
        <div className={styles.profileDetails}>
          <img src="/image-2.png" />
          <p>John</p>
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
