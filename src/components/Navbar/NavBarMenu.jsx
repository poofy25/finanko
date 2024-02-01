import styles from './navBarMenu.module.scss'

import { useEffect } from 'react';

import { HashLink } from 'react-router-hash-link';

import instagram from '/src/assets/Svgs/instagram.svg'
import facebook from '/src/assets/Svgs/facebook.svg'


function NavBarMenu({status , setStatus}) {


    useEffect(()=>{
        const menu = document.querySelector(`.${styles.menu}`)
        if(menu){
            console.log(status , menu)
            if(status){
                menu.classList.add(`${styles.active}`)
            }else{
                menu.classList.remove(`${styles.active}`)
            }
        }
    },[status])

    const menuClick = (e)=>{
        if(e.target !== document.querySelector(`.${styles.menuContent}`
        )){
            setStatus(false)
        }
    }

    return ( 

        <section onClick={menuClick} className={styles.menu}>

            <section className={styles.menuContent}>

            <HashLink onClick={()=>{setStatus(!status)}} smooth to="/#acasa">Acasă</HashLink>
            <HashLink onClick={()=>{setStatus(!status)}} smooth to="/#desprenoi">Despre Noi</HashLink>
            <HashLink onClick={()=>{setStatus(!status)}} smooth to="/#proiecte">Proiecte</HashLink>
            <HashLink onClick={()=>{setStatus(!status)}} smooth to="/#servicii">Servicii</HashLink>
            <HashLink onClick={()=>{setStatus(!status)}} smooth to="/#parteneri">Parteneri</HashLink>
            <HashLink onClick={()=>{setStatus(!status)}} className={styles.lasta} smooth to="/#contacte">Contacte</HashLink>
        
            <span>
                <a target='_blank' href='https://www.facebook.com/finanko.md'><img alt='Facebook Logo' src={facebook}/></a>
                <a target='_blank' href='https://www.instagram.com/finanko.md/'><img alt='Instagram Logo' src={instagram}/></a>
            </span>

            </section>

        </section>


    );
}

export default NavBarMenu;