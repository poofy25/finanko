import styles from './navBar.module.scss'

import logo from '/src/assets/Images/logo_white_cropped.png'

import NavBarMenu from './NavBarMenu'

import { useEffect, useState } from 'react'

import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'




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
                <HashLink smooth to="/#acasa">Acasă</HashLink>
                <HashLink smooth to="/#desprenoi">Despre Noi</HashLink>
                <HashLink smooth to="/#proiecte">Proiecte</HashLink>
                <HashLink smooth to="/#servicii">Servicii</HashLink>
                <HashLink smooth to="/#parteneri">Parteneri</HashLink>

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

              <HashLink smooth to="/#contacte">Contactează-ne</HashLink>

            </section>
            <NavBarMenu  status={menuActive} setStatus={setMenuActive} />
        </nav>
     );
}

export default NavBar;