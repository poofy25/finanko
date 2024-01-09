import styles from './projectPage.module.scss'


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

        </section>
    );
}

export default ProjectPage;