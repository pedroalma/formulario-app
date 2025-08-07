import React,{ useState } from "react";

function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState(0)

    const [user, setUser] = useState({});

    function cadastrarUsuario(e) {
        e.preventDefault();
        setUser({
            nome: nome,
            email: email,
            idade: idade
        })
        setNome(""),
        setEmail(""),
        setIdade(0)
    }
    return (
        <div className="container">
            <h1>Cadastro de usuarios</h1>
            <form onSubmit={cadastrarUsuario} className="container-for">
                <div className="container-insert">
                <div className="div-set">    
                <label htmlFor="nome">Nome:</label>
                <input placeholder="Digite seu nome" type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="div-set">
                <label htmlFor="email">Email:</label>
                <input placeholder="Digite seu e-mail" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="div-set">
                <label htmlFor="idade">Idade:</label>
                <input placeholder="Digite sua idade" type="number" id="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />  
                </div>
                </div>

                <button type="submit" className="botao">Registrar</button>
            </form>

            <div className="container-resp">
                <span>Bem-vindo: {user.nome}</span><br />
                <span>email é: {user.email}</span><br />
                <span>idade é: {user.idade}</span><br />
            </div>
        </div>
    )
}
export default Formulario;