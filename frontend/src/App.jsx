import { useState } from "react"

function MyBotao(props) {
  const [contador, setContador] = useState(0) 
  return (
    <>
      <h1>Contador: {contador}</h1>
      <button>{props.texto}</button>
      <button onClick={() => setContador(contador + 1)}>{props.texto2}</button>
    </>
  )
}

function MeuImput() {
  const [nome, setNome] = useState('')

  const valorImput = (event) => {
    setNome(event.target.value)
  }

  return (
    <>
    <br /><br />
    <input type="text" placeholder="Digite aqui..." onChange={valorImput} />
    <h2>Olá {nome || 'Visitante'}</h2>
    </>
  )
}

function ItemLista(props) {
  return <li>Nome: {props.nome} </li>
}


function MinhaLista() {
  const [lista, setLista] = useState(['caio ', 'Jose-antonio'])

  function adicionarNome() {
    setLista([...lista, 'webrth'])
  }

  return (
    <>
      <ul>
        {lista.map((nome,index) => (
          <ItemLista key={index} nome={nome} />
        ))}
      </ul>
      <button onClick={adicionarNome}>Adicionar Nome</button>
    </>
  )
}




function App() {
  return (
    <>
      <MinhaLista />
      <MyBotao texto="Salvar" texto2="adicionar" />
      <MeuImput />

    </>
  )
}

export default App