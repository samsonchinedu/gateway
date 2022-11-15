import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import styles from '../footer/footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.website}>
                <img src="/image-7.png" />
                <div className={styles.icons}>
                    <FaInstagram />
                    <FaTwitter />
                    <BsFacebook />
                </div>
            </div>
            <div className={styles.details}>
                <div className="">
                    <h3>Products</h3>
                    <p>Features</p>
                    <p>Blog</p>
                </div>
                <div className="">
                    <h3>Help</h3>
                    <p>Contacts Us</p>
                    <p>Faq</p>
                </div>
                <div className="">
                    <h3>Contact</h3>
                    <p>example@mygatewayapp.co</p>
                    <p>+234 8000 0000 00</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;