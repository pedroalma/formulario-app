import React, {use,useEffect,useState} from "react";

function Atividade() {
    const [input, setInput] = useState("");
    const [desejo, setdesejo] = useState([
        "Ser rico",
        "Metas profissionais",
        "Crescimento pessoal",
    ]);

    useEffect(() => {
        const desejoStorage = localStorage.getItem("@desejo");
        if (desejoStorage) {
            setdesejo(JSON.parse(desejoStorage));
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("@desejo", JSON.stringify(desejo));
    }, [desejo]);

    function cadastradesejo(e) {
        e.preventDefault();
        setdesejo([...desejo, input]);
        setInput("");
    }
    return(
        <div>
            <h1>Lista de desejos</h1>
            <form onSubmit={cadastradesejo}>
                <label htmlFor="nome">Nome do desejos</label>
                <input 
                    placeholder="Digite o desejoso"
                    type="text" 
                    autoFocus
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button type="submit">Cadastrar</button>
            </form> 
            <div>
                <ul>
                   
                    {desejo.map((desejo) => (
                        <li key={desejo}>{desejo}</li>
                    ))}
                 
                </ul>
            </div>   
        </div>
    );
}
export default Atividade;