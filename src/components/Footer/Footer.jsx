import styles from './footer.module.scss'

import logo from '/src/assets/Images/logo_cropped.png'
import facebook from '/src/assets/Svgs/facebook.svg'
import instagram from '/src/assets/Svgs/instagram.svg'

function Footer() {
    return ( 
        <footer>
            
            <section className={styles.content}>
                <article>
                    <h3>PROGRAM DE LUCRU</h3>
                    <p>Luni - Sambata : 09:00 - 18:00</p>
                    <p>Duminica Ziua Libera</p>
                </article>
                <article>
                    <h3>NAVIGHEZĂ</h3>
                    <a href='#acasa'>Acasă</a>
                    <a href='#desprenoi'>Despre Noi</a>
                    <a href='#proiecte'>Proiecte</a>
                    <a href='#servicii'>Servicii</a>
                    <a href='#parteneri'>Parteneri</a>
                    <a href='#contacte'>Contacte</a>

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
                    <a href='#acasa' className={styles.logo}><img src={logo}/></a>
                    <h3>SUNTEM ÎN REȚTELELE SOCIALE</h3>
                    <span>
                        <a target='_blank' href='https://www.facebook.com/finanko.md' className={styles.social}><img src={facebook}/></a>
                        <a target='_blank' href='https://www.instagram.com/finanko.md/' className={styles.social}><img src={instagram}/></a>
                    </span>
                </article>
            </section>
            <section className={styles.bottom}></section>
        </footer>
     );
}

export default Footer;