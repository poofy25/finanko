import styles from './footer.module.scss'

import logo from '/src/assets/Images/logo_white_cropped.webp'

import facebook from '/src/assets/Svgs/facebook.svg'
import instagram from '/src/assets/Svgs/instagram.svg'

import { HashLink } from 'react-router-hash-link'

function Footer() {
    return ( 
        <footer>
            
            <section className={styles.content}>
                <article>
                    <h3>PROGRAM DE LUCRU</h3>
                    <p>Luni - Sambata : 09:00 - 18:00</p>
                    <p>Duminica Ziua Libera</p>
                    <h3>ADRESA</h3>
                    <p>Șos. Hîncerști 43</p>
                </article>
                <article>
                    <h3>NAVIGHEZĂ</h3>
                    <HashLink smooth to="/#acasa">Acasă</HashLink>
                    <HashLink smooth to="/#desprenoi">Despre Noi</HashLink>
                    <HashLink smooth to="/#proiecte">Proiecte</HashLink>
                    <HashLink smooth to="/#servicii">Servicii</HashLink>
                    <HashLink smooth to="/#parteneri">Parteneri</HashLink>
                    <HashLink smooth to="/#contacte">Contacte</HashLink>

                </article>
                <article>
                    <h3>TELEFON</h3>
                    <a href='tel:+37369374873'>+37369374873</a>
                    <a href='tel:+3736937111'>+3736937111</a>
                    <h3>EMAIL</h3>
                    <a href='mailto:finanko.md@gmail.com'>finanko.md@gmail.com</a>
                </article>
                <article>
                    <h3>URMAREȘTE-NE</h3>
                    <a href='#acasa' alt='Logo' className={styles.logo}><img alt='Logo' src={logo}/></a>
                    <h3>SUNTEM ÎN REȚELELE SOCIALE</h3>
                    <span>
                        <a  target='_blank' href='https://www.facebook.com/finanko.md' className={styles.social}><img alt='Facebook Logo' src={facebook}/></a>
                        <a  target='_blank' href='https://www.instagram.com/finanko.md/' className={styles.social}><img alt='Instagram Logo' src={instagram}/></a>
                    </span>
                </article>
            </section>
            <section className={styles.bottom}>
                <p>© 2024 Finanko</p>
                <a href='https://www.facebook.com/buzacristian25' target='_blank'>Website creat de Buza Cristian</a>
            </section>
        </footer>
     );
}

export default Footer;