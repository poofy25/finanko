import styles from './projectPage.module.scss'

import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'


import contactBg from '/src/assets/Images/Sections/contactBG.webp'

function ProjectPage({data}) {
    return ( 
        <section className={styles.container} id='projectpage'>
            <h2>{data.title}</h2>


            <div className={styles.content}>
                <ul>
                    {data.points.map(point=>{
                        return(
                            <li>{point}</li>
                        )
                    })}
                </ul>

            </div>

            <div className={styles.contactContainer}>
                <HashLink smooth to="/#contacte">Contactează-ne</HashLink>
                <img alt='Contact Image' src={contactBg}/>
            </div>

        </section>
    );
}

export default ProjectPage;