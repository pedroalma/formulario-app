import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Timer from './app'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Timer/>
  </StrictMode>,
)
