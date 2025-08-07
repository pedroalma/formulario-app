import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Formulario from './components/Formulario'
import MyForm from './components/test'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulario />
  </StrictMode>,
)
