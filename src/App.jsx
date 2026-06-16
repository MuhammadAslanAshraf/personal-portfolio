import React from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import HeroSections from './components/hero/HeroSections'
import SelectorProject from './components/feature/SelectorProject'
import SuccessStories from './components/testimonials/SuccessStories'
import About from './components/home/About'
import Footer from './components/layout/Footer'
import Aslan from './components/skills/aslan'
import SkillsAll from './components/skills/SkillsAll'
import ExpirenceCard from './components/Expirence/ExpirenceCard'
import Projects from './components/projects/Projects'
import Educations from './components/edu/Educations'
import TopRatedFreelancer from './components/hire/TopRatedFreelancer'

function App() {

  return (
   <>
   <Navbar/>
   <div className='md:px-20 scroll-smooth'>
  <HeroSections/>
  <SelectorProject/>
  {/* <SuccessStories/> */}
  <About/>
  <Aslan/>
  <SkillsAll />
  <ExpirenceCard/>
  <Projects/>
  <Educations/>
  <TopRatedFreelancer/>
  </div>
  <Footer/>
   </>
  )
}

export default App
