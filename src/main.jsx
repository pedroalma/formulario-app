import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import Timer from './app'
import MyForm from './components/test'
import Counter from './app'
import FormularioCadastro from './components/formulariocadastro'
import Tarefas from './components/Tarefas'
import Atividade from './components/atividade'
import ListaDeRepositorios from './components/text'
import PaginaBootstrap from './components/pagina-Bootstrap';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaBootstrap/>
  </StrictMode>,
)
