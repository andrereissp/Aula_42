import { useEffect, useState } from "react";

function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tarefas')
            .then(resposta => resposta.json())
            .then(data => setTarefas(data))
            .catch(erro => console.error("Erro ao buscar tarefas:", erro));
    }, []);

    return (
        <div style={{ background: "#1725752f", borderRadius: "15px", padding: "10px" }}>
            <ul style={{ display: "flex", listStyle: "none", flexWrap: "wrap", padding: 0 }}>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id}>
                        <div style={{
                            background: "#5e5e5e",
                            color: "white",
                            padding: "15px",
                            margin: "10px",
                            width: "250px",
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "15px"
                        }}>
                            <h2 style={{ margin: "0 0 10px 0", fontSize: "1.2rem" }}>
                                {tarefa.titulo}
                            </h2>

                            <p style={{ margin: "5px 0" }}>
                                <strong>Status: </strong>
                                {tarefa.concluido ? "✅ Concluída" : "⏳ Pendente"}
                            </p>

                            <div style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #ffffff3b", fontSize: "0.9rem" }}>
                                <p style={{ margin: "2px 0" }}>
                                    <strong>Criador: </strong> {tarefa.criador.nome}
                                </p>
                                <p style={{ margin: "2px 0", color: "#dcdcdc" }}>
                                    {tarefa.criador.email}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeTarefas;