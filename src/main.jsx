import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Timer from './app'
import MyForm from './components/test'
import Counter from './app'
import FormularioCadastro from './components/formulariocadastro'
import Tarefas from './components/Tarefas'
import Atividade from './components/atividade'
import ListaDeRepositorios from './components/text'
import PaginaBootstrap from './components/pagina-Bootstrap';
import ExemploStyle from './components/ExemploStyle';
import NavBar from './components/NavBar';
import Atividade_Externo from './components/Atividade_CSS_Externo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Atividade_Externo/>
  </StrictMode>,
)
