import styles from './navBar.module.scss'

import logo from '/src/assets/Images/logo_white_cropped.webp'

import NavBarMenu from './NavBarMenu'

import { useState } from 'react'

import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'




function NavBar({width}) {


    const [menuActive , setMenuActive] = useState(false)
  

    const menuBtnHandler = ()=>{
        setMenuActive(!menuActive)
    }
    


    return ( 
        <nav className={styles.none}>
            <a href='#acasa' className={styles.logoBar}><img alt='Logo' src={logo}/></a>
            <section className={styles.navigationBar}>
                <HashLink smooth to="/#acasa" style={{marginLeft:'auto'}}>Acasă</HashLink>
                <HashLink smooth to="/#desprenoi">Despre Noi</HashLink>
                <HashLink smooth to="/#proiecte">Proiecte</HashLink>
                <HashLink smooth to="/#servicii">Servicii</HashLink>
                <HashLink smooth to="/#parteneri">Parteneri</HashLink>

                {width > 992 ? 
                <>
                   <section className={styles.contactBar}>
                <div>
                  <a href='tel:069374873'>069374873</a>
                  <a href='tel:069371111'>069371111</a>
                </div>
                <span></span>

                <HashLink smooth to="/#contacte">Contactează-ne</HashLink>

                </section>
                </>
                :
                <>
                <button aria-label='Menu' onClick={menuBtnHandler} className={styles.menuBtn}>
                    <div className={menuActive && styles.active}></div>
                    <div className={menuActive && styles.active}></div>
                    <div className={menuActive && styles.active}></div>
                </button>
                
                </>
                }
                
            </section>
            
            <NavBarMenu  status={menuActive} setStatus={setMenuActive} />
        </nav>
     );
}

export default NavBar;