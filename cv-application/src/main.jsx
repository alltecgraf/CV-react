import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import General from './components/General.jsx'
import Education from './components/Education.jsx'
import Practical from './components/Practical.jsx'
import './components/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='main'>
      <General />
      <div className='container'>
        <Education />
        <button>Add new education</button>
      </div>
      <div className='container'>
        <Practical />
        <button>Add new company</button>
      </div>
    </div>

  </StrictMode>
)
