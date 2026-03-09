import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nev from './Component/Nevbar/Nev.jsx'
import Hero from './Component/Hero/Hero.jsx'
import Education from './Component/Education/Edu.jsx'
import Skills from './Component/Skill/Skil.jsx'
import Project from './Component/Project/Project.jsx'
import Cont from './Component/Contact/Contact.jsx'
import Footer from './Component/Footer/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nev />
    <Hero />
    <Education />
    <Project />
    <Skills />
    <Cont />
    <Footer />
  </StrictMode>
)
