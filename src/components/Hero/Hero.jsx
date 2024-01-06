import styles from './hero.module.scss'

import Image from '/src/assets/Images/Sections/header.jpg'

function HeroSection() {
    return ( 
        <section className={styles.container} id='acasa'>
            <header>
                <h1>Descoperă soluții elegante pentru afacerea ta</h1>
            </header>
            <img src={Image}/>
        </section>
     );
}

export default HeroSection;