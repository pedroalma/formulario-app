import React, {use,useEffect,useState} from "react";

function Tarefas() {
    const [input, setInput] = useState("");
    const [tarefas, setTarefas] = useState([
        "Pagar conta de luz",
        "Pagar conta de água",
        "Assistir aulas",
    ]);

    useEffect(() => {
        const tarefasStorage = localStorage.getItem("@tarefas");
        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("@tarefas", JSON.stringify(tarefas));
    }, [tarefas]);

    function cadastrarTarefa(e) {
        e.preventDefault();
        setTarefas([...tarefas, input]);
        setInput("");
    }
    return(
        <div>
            <h1>Cadastro de tarefas</h1>
            <form onSubmit={cadastrarTarefa}>
                <label htmlFor="nome">Nome da tarefa:</label>
                <input 
                    placeholder="Digite uma tarefa"
                    type="text" 
                    autoFocus
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button type="submit">Cadastrar</button>
            </form> 
            <div>
                <ul>
                    <strong> {tarefas.map((tarefas) => (
                        <li key={tarefas}>{tarefas}</li>
                    ))} </strong>
                    
                </ul>
            </div>   
        </div>
    );
}
export default Tarefas;