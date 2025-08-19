import "../css/atividade.css";
import custom5 from '../assets/custom-5.png';
import custom1 from '../assets/custom-1.png';
import custom2 from '../assets/custom-2.png';
import custom3 from '../assets/custom-3.png';
import custom4 from '../assets/custom-4.png';
import usuario from '../assets/usuario.png';
function Atividade_Externo(){
    return(
        <div className="container">
            <header className="topo">
            <div className="logo">
                <img src={custom5} className="logo-img" />
                    <div className="logo-dentro">
                        <h1 className="logo-dentro-cima">WeDo</h1>
                        <h1 className="logo-dentrobaixo">Comunique. Colabore. Crie.</h1>
                    </div>
            </div>
            <nav className="menu">
                <ul className="menu-lista">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Produto</a></li>
                    <li><a href="#">Contato</a></li>
                    <div>
                        <li><a href="#">login</a></li>
                        <img src={usuario} className="usuario-img" />
                    </div>
                    

                    <button>Começar</button>
                </ul>
            </nav>
            </header>
            <main className="recheio">
                <div className="texto">
                    <div className="texto-cima">
                        <h1> Comunique.Colabore. Crie.</h1>
                    </div>
                    <div className="texto-baixo">
                        <h1>WeDo oferece um jeito eficaz de gerenciar seus projetos</h1>
                    </div>
                    <div className="texto-button">
                        <button>Começar</button>
                    </div>
                     <div className="texto-img">
                        <div className="texto-img-cadeado">
                            <img src={custom1}/>
                            <h1>Velocidade e segurança</h1>
                        </div>
                        <div className="texto-img-tela">
                            <img src={custom2}/>
                            <h1>Flexibilidade e agilidade</h1>
                        </div>
                        <div className="texto-img-melhor">
                            <img src={custom3}/>
                            <h1>Melhor experiência</h1>
                        </div>
                     </div>
                </div>
                <div className="texto-img-maio">
                    <img src={custom4}/>
                </div>
            </main>
            
    
        </div>
    )
}
export default Atividade_Externo;