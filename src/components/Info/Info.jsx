import styles from './info.module.scss'

function InfoSection() {
    return ( 
        <article className={styles.container} id='info'>

            <h2>Alegem cea mai comodă modalitate de colaborare pentru fiecare client</h2>
            <p>Prestăm servicii contabile pentru companii din cele mai diverse domenii: construcții, producere, prestare servicii, organizatii de creditare, lombard, servicii sport si fitness, tehnologii informaționale, ONG, import-export, agricultură, comerț en-gros și en-detail, transport de marfă și pasageri, activitate de asigurări, intermediere, etc</p>

        </article>
     );
}

export default InfoSection;