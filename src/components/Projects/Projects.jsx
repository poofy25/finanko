import styles from './projects.module.scss'

import logo from '/src/assets/Images/logo.png'

import accountingSVG from '/src/assets/Svgs/accounting.svg'
import consultingSVG from '/src/assets/Svgs/consulting.svg'
import analysisSVG from '/src/assets/Svgs/analysis.svg'
import hrSVG from '/src/assets/Svgs/hr.svg'

function ProjectsSection() {
    return ( 
        <section className={styles.container} id='proiecte'>

            <div className={styles.circle}>
                <img src={logo}/>
            </div>

            <section className={styles.contentContainer}>
                <div className={styles.projectContainer}>
                    <span></span>
                    <a className={styles.project}>
                        <div><img src={consultingSVG}/></div>
                        <article>
                        <h3>BUSINESS CONSULTANTA</h3>
                        <p>• Detalii - </p>

                        </article>
                    </a>
                </div>
                <div className={styles.projectContainer}>
                    <span></span>
                    <a className={styles.project}>
                        <div><img src={accountingSVG}/></div>
                        <article>
                        <h3>SERVICII CONTABILITATE</h3>
                        <p>• Detalii - </p>

                        </article>
                    </a>
                </div>
                <div className={styles.projectContainer}>
                    <span></span>
                    <a className={styles.project}>
                        <div><img src={analysisSVG}/></div>
                        <article>
                        <h3>ANALIZĂ MANAGERIALĂ </h3>
                        <p>• Detalii - </p>
                        </article>
                    </a>
                </div>
                <div className={styles.projectContainer}>
                    <span></span>
                    <a className={styles.project}>
                        <div><img src={hrSVG}/></div>
                        <article>
                        <h3>HR ȘI PAYROLL</h3>
                        <p>• Detalii - </p>

                        </article>
                    </a>
                </div>
                
                
            </section>


        </section>
    );
}

export default ProjectsSection;