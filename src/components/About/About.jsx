import styles from './about.module.scss'

import Image from '/src/assets/Images/Sections/about.png'

function AboutSection() {
    return ( 
        <section className={styles.container} id='desprenoi'>
            <div className={styles.content}>
                <h2>Despre <br/> Noi</h2>
                <p>
                Finanko Partners SRL s-a fondat din dorința de a aborda procesele de business într-un mod diferit. Obiectivul nostru este de a sprijini dezvoltarea durabilă a mediului de afaceri şi a antreprenorilor din Republica Moldova, care sunt nu doar partenerii nostri dar si comunitatea in care ne dezvoltam reciproc. Suntem preocupaţi în permanenţă de respectarea angajamentelor asumate şi garantarea rezultatului promis. Reputatia noastra este valuta de baza, astfel, reputatia partenerilor reprezentati de noi trebuie sa fie la cele mai ridicate standarde
                </p>
            </div>
            {/* <div className={styles.background}>
                <div className={styles.backgroundImg}>
                <img src={Image}/>
                </div>
                <div className={styles.backgroundSquare}>

                </div>
            </div> */}
            <img src={Image} className={styles.bgImg}/>
        </section>
     );
}

export default AboutSection;