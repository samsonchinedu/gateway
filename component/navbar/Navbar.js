import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { VscBellDot, VscBell } from "react-icons/vsc";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { useRouter } from "next/router"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [menu, setMenu] = useState(false)
  const router = useRouter()

  const click = () => {
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <img src="/image-1.png" />
      <ul className={styles.link}>
        <li>Home</li>
        <li className={styles.active} onClick={click}>Adventures</li>
        <li>Community</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className={styles.profile}>
        <VscBell className={styles.icon} onClick={() => {
          setMenu(!menu)
          setToggle(false)
        }} />
        <div className={styles.profileDetails} onClick={() =>{
          setToggle(!toggle)
          setMenu(false)
        }}>
          <img src="/image-2.png" />
          <p>John</p>
          <FaAngleDown />
        </div>

      </div>

      <div  className={styles.profy} style={{"display": toggle?'flex' : 'none'}}>
            <div className={styles.image}>
                <img src="/image-9.png" />
            </div>
            <h3>John Doe</h3>
            <p>example@email.com</p>
            <div className={styles.line}></div>
            <ul>
                <div className={styles.li}><li>My Profile</li> <FaAngleRight className={styles.icons} /></div>
                <div className={styles.li} ><li>My Adventures</li> <FaAngleRight className={styles.icons} /></div>
                <div className={styles.li}><li>Wallet</li> <FaAngleRight className={styles.icons} /></div>
                <div className={styles.li}><li>Leaderboard</li> <FaAngleRight className={styles.icons} /></div>
                <div className={styles.li}><li>Settings</li> <FaAngleRight className={styles.icons} /></div>
            </ul>
            <div className={styles.lines}></div>
            <button>Log out</button>
        </div>

        <div className={styles.notificate} style={{"display": menu? 'block' : 'none'}}>
          <div className={styles.contain}>
            <div className={styles.tab}>
              <small><b>2</b> new notifications</small>
              <h4>See all</h4>
            </div>
            <div className={styles.frame}>
              <VscBellDot className={styles.bell} />
              <div>
                <h4>Redeem successful</h4>
                <p>You successfully redeemed your points to cryptocurrencies and your wallet balance has been updated.</p>
                <small>2 mins ago</small>
              </div>
            </div>

            <div className={styles.frame}>
              <VscBellDot className={styles.bell} />
              <div>
                <h4>Redeem successful</h4>
                <p>You successfully redeemed your points to cryptocurrencies and your wallet balance has been updated.</p>
                <small>2 mins ago</small>
              </div>
            </div>

            <div className={styles.frame}>
              <VscBell className={styles.bell} />
              <div>
                <h4>Redeem successful</h4>
                <p>You successfully redeemed your points to cryptocurrencies and your wallet balance has been updated.</p>
                <small>2 mins ago</small>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
