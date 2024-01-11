import styles from './stats.module.scss'


function StatsSection() {



    return ( 
        <section className={styles.container} id='statistici'>

            <article>
                <h2>2015</h2>
                <p>anul fondarii</p>
            </article>
            <article>
                <h2>4</h2>
                <p>Proiecte complete de activitate</p>
            </article>
            <article>
                <h2>99%</h2>
                <p>Solicitari ale clientilor se executa in aceeasi zi</p>
            </article>
            <article>
                <h2>100% </h2>
                <p>Confidentialitate garantata si grija fata de datele si reputatia partenerului de afaceri</p>
            </article>

        </section>
     );
}

export default StatsSection;