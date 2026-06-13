import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sign_up from './components/SignupForm.jsx'
import { BrowserRouter, } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
// import Sign_up from './components/SignupForm.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign_up/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
