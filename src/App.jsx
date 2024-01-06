
import './styles/app.scss'

import NavBar from './components/Navbar/NavBar'
import HeroSection from './components/Hero/Hero'
import AboutSection from './components/About/About'
import InfoSection from './components/Info/Info'
import ProjectsSection from './components/Projects/Projects'
import StatsSection from './components/Stats/Stats'
import ServicesSection from './components/Services/Services'
import PartnersSection from './components/Partners/Partners'
import ContactsSection from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'


import { useWindowSize } from '@uidotdev/usehooks'
import { useState , useEffect } from 'react'

function App() {

  const size = useWindowSize()
  const [width , setWidth] = useState(window.screen.width)

  useEffect(()=>{
    console.log(size)
    setWidth(size.width)
  },[size])

  return (
    <>
    <NavBar width={width}/>
    <HeroSection/>
    <AboutSection/>
    <InfoSection/>
    <ProjectsSection/>
    <StatsSection/>
    <ServicesSection/>
    <PartnersSection/>
    <ContactsSection/>
    <Footer/>
    </>
  )
}

export default App
