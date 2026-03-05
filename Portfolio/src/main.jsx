import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Me from './Component/ME/Me.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Me />
  </StrictMode>,
)
