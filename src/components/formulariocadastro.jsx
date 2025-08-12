import React, {useState} from "react";
function FormularioCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [numero, setNumero] = useState(0);
    const [rua, setRua] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [cep, setCep] = useState(0);

    const [user, setUser] = useState({});

    function mostrar(){
        <div>
            <h1>{setNome}</h1>
            <h1>{setSobrenome}</h1>
        </div>
    }
    function cadastrarUsuario(e) {
        e.preventDefault();
        setUser({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            numero: numero,
            rua: rua,
            complemento: complemento,
            cidade: cidade,
            estado: estado,
            cep: cep
        })
        setNome(""),
        setSobrenome(""),
        setEmail(""),
        setNumero(0),
        setRua(""),
        setComplemento(""),
        setCidade(""),
        setEstado(""),
        setCep(0)
    }
    return (
        <div className="container">
            <h1>Formulario de cadastro de Clientes</h1>
            <div className="container-cadastro">
                <form onSubmit={cadastrarUsuario}>
                    <div className="div-set">
                    <label htmlFor="nome">Nome Completo:</label>
                    <input placeholder="nome" type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <input placeholder="sobre nome" type="text" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
                    </div>
                    <div className="div-set">
                    <label htmlFor="email">E-mail:</label>
                    <input placeholder="Digite seu e-mail" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="div-set">
                    <label htmlFor="numero">Número:</label>
                    <input placeholder="(000) 000-0000" type="number" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    </div>
                    <div className="div-set">
                    <label htmlFor="endereco">Endereço</label>
                    <input placeholder="rua" type="text" id="rua" value={rua} onChange={(e) => setRua(e.target.value)}/>
                    <input placeholder="complemento" type="text" id="complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                    </div>
                    <button type="submit" onClick={mostrar}>Enviar</button>
                </form>    
            </div>
        </div>
    );
}
export default FormularioCadastro;