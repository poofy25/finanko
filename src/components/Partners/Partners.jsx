import styles from './partners.module.scss'
import bgImg from '/src/assets/Images/Sections/partners.png'

import part1 from '/src/assets/Images/Sections/Partners/1.png'
import part2 from '/src/assets/Images/Sections/Partners/2.png'
import part3 from '/src/assets/Images/Sections/Partners/3.png'
import part4 from '/src/assets/Images/Sections/Partners/4.png'
import part5 from '/src/assets/Images/Sections/Partners/5.png'
import part6 from '/src/assets/Images/Sections/Partners/6.svg'


function PartnersSection() {
    return (
        <section className={styles.container} id='parteneri'>
            <h2>Partenerii</h2>
            <article>
                <span><img src={bgImg}/></span>
                <div><img src={part1}/></div>
                <div><img src={part6}/></div>
                <div><img src={part2}/></div>
                <div><img src={part3}/></div>
                <div><img src={part4}/></div>
                <div><img src={part5}/></div>
            </article>
        </section> 
    );
}

export default PartnersSection;