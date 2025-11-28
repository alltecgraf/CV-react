import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import General from './components/General.jsx'
import './components/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General />
    
  </StrictMode>
)
