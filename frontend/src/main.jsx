import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListaDeTarefas from './components/tarefas'
// import Crud from './components/cadastro2'
// //import Aula28 from './components/aula28'
// import ListaDeProdutos from './components/produtos'
// import App from './App.jsx'
// import CriarItem from './components/cadastro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CriarItem /> */}
    {/* <Crud /> */}
    {/* <Aula28 /> */}
    {/* <ListaDeProdutos/> */}
    <ListaDeTarefas/>
  </StrictMode>
)
