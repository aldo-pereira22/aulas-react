import { FaAddressCard, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer() {
    return  (
        <div>

            <ul className={styles.socialList}>
                <li> <FaFacebook /> </li>
                <li> <FaInstagram /> </li>
                <li> <FaLinkedin /> </li>
                <li> <FaAddressCard /> </li>
            </ul>
            <p>Footer da página</p>
        </div>
    )
}

export default Footer