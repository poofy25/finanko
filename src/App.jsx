
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

import ProjectPage from './components/Projects/ProjectPage'
import projectsData from './components/Projects/projectsData'


import { useWindowSize } from '@uidotdev/usehooks'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { useState , useEffect } from 'react'


function App() {

  const size = useWindowSize()
  const [width , setWidth] = useState(window.screen.width)

  useEffect(()=>{
    console.log(size)
    setWidth(size.width)
  },[size])

  return (
    
    <BrowserRouter>
    <NavBar width={width}/>
    <Routes>
      <Route path="/" element={

    <>
      
      <HeroSection/>
      <AboutSection/>
      <InfoSection/>
      <ProjectsSection/>
      <StatsSection/>
      <ServicesSection/>
      <PartnersSection/>
      <ContactsSection/>
      
    </>

      }/>
     
    </Routes>
    <Routes>
      <Route path="/business_consultanta" element= {<ProjectPage data={projectsData['BUSINESS CONSULTANTA']}/>}/>
      <Route path="/servicii_de_contabilitate" element= {<ProjectPage data={projectsData['SERVICII DE CONTABILITATE']}/>}/>
      <Route path="/servicii_managment_resurse_umane_si_salarizare" element= {<ProjectPage data={projectsData['SERVICII MANAGEMENT RESURSE UMANE SI SALARIZARE']}/>}/>
      <Route path="/analiza_manageriala" element= {<ProjectPage data={projectsData['ANALIZA MANAGERIALA']}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
