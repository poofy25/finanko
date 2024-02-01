import styles from './hero.module.scss'

import Image from '/src/assets/Images/Sections/header.webp'

function HeroSection() {
    return ( 
        <header className={styles.container} id='acasa'>
                <h1>Descoperă soluții optime pentru afacerea ta</h1>
            <img alt='Hero Image' src={Image}/>
        </header>
     );
}

export default HeroSection;