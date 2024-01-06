import styles from './navBar.module.scss'

import logo from '/src/assets/Images/logo_white_cropped.png'

import NavBarMenu from './NavBarMenu'

import { useEffect, useState } from 'react'




function NavBar({width}) {


    const [menuActive , setMenuActive] = useState(false)
  

    const menuBtnHandler = ()=>{
        setMenuActive(!menuActive)
    }
    useEffect(()=>{
        if(width > 1200){
        const navBar = document.querySelector('nav')
        let lastScrollHeight = 0
        let lastScrollUp = 0;
        let lastScrollDown = 0
        window.addEventListener('scroll', (e)=>{
      
          if (lastScrollHeight > document.documentElement.scrollTop ){
            lastScrollUp = document.documentElement.scrollTop
            if(lastScrollUp < navBar.offsetHeight){
                navBar.classList.remove(styles.small)
            }
          }
          if ( lastScrollHeight < document.documentElement.scrollTop) {
            lastScrollDown = document.documentElement.scrollTop
          }
          if (lastScrollDown - lastScrollUp >= navBar.offsetHeight && lastScrollHeight > document.documentElement.scrollTop && navBar.classList.contains('NavbarActive')){
            navBar.classList.remove(styles.small)
          }
          if(lastScrollDown - lastScrollUp >= navBar.offsetHeight && lastScrollHeight < document.documentElement.scrollTop  && document.documentElement.scrollTop > navBar.offsetHeight ){
            navBar.classList.add(styles.small)
           }
          lastScrollHeight = document.documentElement.scrollTop
        })
      
        return ()=>{
            window.removeEventListener('scroll' , ()=>{})
        }
        }
      },[width])


    return ( 
        <nav className={styles.none}>
            <a href='#acasa' className={styles.logoBar}><img alt='Logo' src={logo}/></a>
            <section className={styles.navigationBar}>
                <a href='#acasa'>Acasă</a>
                <a href='#desprenoi'>Despre Noi</a>
                <a href='#proiecte'>Proiecte</a>
                <a href='#servicii'>Servicii</a>
                <a href='#parteneri'>Parteneri</a>
                {width > 992 ? 
                <>
                   
                </>
                :
                <button aria-label='Menu' onClick={menuBtnHandler} className={styles.menuBtn}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                }
                
            </section>
            <section className={styles.contactBar}>
                <div>
                  <a href='tel:069374873'>069374873</a>
                  <a href='tel:069371111'>069371111</a>
                </div>
                <span></span>

              <a href='#contacte'>Contactează-ne</a>
            </section>
            <NavBarMenu  status={menuActive} setStatus={setMenuActive} />
        </nav>
     );
}

export default NavBar;