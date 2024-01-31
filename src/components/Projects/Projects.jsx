import styles from './projects.module.scss'

import logo from '/src/assets/Images/logo.png'

import accountingSVG from '/src/assets/Svgs/accounting.svg'
import consultingSVG from '/src/assets/Svgs/consulting.svg'
import analysisSVG from '/src/assets/Svgs/analysis.svg'
import hrSVG from '/src/assets/Svgs/hr.svg'

function ProjectsSection() {
    return ( 
        <section className={styles.container} id='proiecte'>
            <h2>Apeleaza daca ai nevoie de:</h2>
            <section>
                <div className={styles.circle}>
                    <img alt='Logo' src={logo}/>
                </div>

                <section className={styles.contentContainer}>
                    <div className={styles.projectContainer}>
                        <span></span>
                        <a href='/business_consultanta' className={styles.project}>
                            <div><img alt='Icon' src={consultingSVG}/></div>
                            <article>
                            <h3>BUSINESS CONSULTANTA</h3>
                            <p>• Detalii - </p>

                            </article>
                        </a>
                    </div>
                    <div className={styles.projectContainer}>
                        <span></span>
                        <a href='/servicii_de_contabilitate' className={styles.project}>
                            <div><img  alt='Icon'  src={accountingSVG}/></div>
                            <article>
                            <h3>SERVICII CONTABILITATE</h3>
                            <p>• Detalii - </p>

                            </article>
                        </a>
                    </div>
                    <div className={styles.projectContainer}>
                        <span></span>
                        <a href='/analiza_manageriala' className={styles.project}>
                            <div><img  alt='Icon'  src={analysisSVG}/></div>
                            <article>
                            <h3>ANALIZĂ MANAGERIALĂ </h3>
                            <p>• Detalii - </p>
                            </article>
                        </a>
                    </div>
                    <div className={styles.projectContainer}>
                        <span></span>
                        <a href='/servicii_managment_resurse_umane_si_salarizare' className={styles.project}>
                            <div><img  alt='Icon'  src={hrSVG}/></div>
                            <article>
                            <h3>HR ȘI PAYROLL</h3>
                            <p>• Detalii - </p>

                            </article>
                        </a>
                    </div>
                    
                    
                </section>
            </section>

        </section>
    );
}

export default ProjectsSection;