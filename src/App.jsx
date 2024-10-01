import React from 'react'
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import SkillsCard from './Components/SkillsCard/SkillsCard'
import ExperienceSec from './Components/ExperienceSec/ExperienceSec'
import About from './Components/About Me/About'
import Projects from './Components/Projects/projects'
import Testonomial from './Components/Testonomial/Testonomial'
import ContactUs from './Components/Contact/ContactUs'
import Footer from './Components/Footer/Footer'
// import Testonomial from './Components/Testonomial/Testonomial'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <SkillsCard/>
      <ExperienceSec/>
      <About/>
      <Projects/>
      <Testonomial/>
      <ContactUs/>
      <Footer/>

    </div>
  )
}

export default App
