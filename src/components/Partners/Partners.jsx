import styles from './partners.module.scss'
import bgImg from '/src/assets/Images/Sections/partners.webp'

import part1 from '/src/assets/Images/Sections/Partners/1.webp'
import part2 from '/src/assets/Images/Sections/Partners/2.webp'
import part3 from '/src/assets/Images/Sections/Partners/3.webp'
import part4 from '/src/assets/Images/Sections/Partners/4.webp'
import part5 from '/src/assets/Images/Sections/Partners/5.webp'
import part6 from '/src/assets/Images/Sections/Partners/6.svg'


function PartnersSection() {
    return (
        <section className={styles.container} id='parteneri'>
            <h2>Parteneri</h2>
            <article>
                <span><img  alt='Partners Image'  src={bgImg}/></span>
                <div><img  alt='Partner Logo'  src={part3}/></div>
                <div><img alt='Partner Logo' src={part5}/></div>
                <div><img alt='Partner Logo' src={part4}/></div>
                <div><img alt='Partner Logo' src={part1}/></div>
                <div><img alt='Partner Logo' src={part6}/></div>
                <div><img alt='Partner Logo' src={part2}/></div>
                
            </article>
        </section> 
    );
}

export default PartnersSection;