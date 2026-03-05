// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './Counter'
import Counter from '../src/Component/Counter'
import Flute from './Component/Flute'
import Show from './Component/ProductList'
function App() {
  return (
    <>
    <Counter />
    <Flute />
    <Show />
    </>
  )
}

export default App;
