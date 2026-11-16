// import { useState } from "react";

// function CriarItem() {
//     const [lista, setLista] = useState([])  //para salvar valores na lista
//     const [textoDigitado, setTextoDigitado] = useState('')// para salvar o valor do texto digitado no input

//     const [idEmEdicao, setidEmEdicao] = useState(null)//para salva o valor para edição


//     //(CREATE) ADICIONAR NOVO ITEM----------adicionarNovoItem
//     const salvarItem = (e) => {
//         e.preventDefault();//evita o carregamento da pagina ao clicar em enviar no formulario

//         if (!textoDigitado.trim()) return //evita que adicione itens sem informação

//         if (idEmEdicao !== null) {
//             const listaAtualizada = lista.map((item) => {
//                 if (item.id === idEmEdicao) {
//                     return { ...item, nome: textoDigitado }
//                 }

//                 return item
//             })

//             setLista(listaAtualizada)
//             setidEmEdicao(null)
//         } else {
//             const novoItem = { //Modelo de informações do produto
//                 id: Date.now(),
//                 nome: textoDigitado,
//             }
//             setLista([...lista, novoItem])  //com o "Spread"(...) faz uma copia da lista original, depois adiciona o novo item
//         }

//         setTextoDigitado('')    //limpa o texto digitado para adicionar outros elementos
//     }

//     const prepararEdicao = (item) => {
//         setTextoDigitado(item.nome)    //adiciona o nome do input
//         setidEmEdicao(item.id)    // e guardo o id que estamos a editar
//     }

//     const removerItem = (idParaApagar) => {
//         const listaFiltrada = lista.filter((item) => {
//             return item.id !== idParaApagar
//         })

//         setLista(listaFiltrada)
//     }


//     return (

//         <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'sans-serif' }}>
//             <h3>CRUD Completo: Modo Update</h3>

//             <form onSubmit={salvarItem}>
//                 <input
//                     type="text"
//                     placeholder="Escreva algo..."
//                     value={textoDigitado}
//                     onChange={(e) => setTextoDigitado(e.target.value)}
//                 />
//                 {/* O texto do botão muda dinamicamente aqui */}
//                 <button type="submit">
//                     {idEmEdicao !== null ? 'Atualizar' : 'Adicionar'}
//                 </button>
//             </form>

//             <ul>
//                 {lista.map((item) => {
//                     return (
//                         <li key={item.id} style={{ marginBottom: '8px' }}>
//                             <span>{item.nome}</span>

//                             {/* Botão de Editar adicionado aqui */}
//                             <button
//                                 type="button"
//                                 onClick={() => { prepararEdicao(item); }}
//                                 style={{ marginLeft: '10px', marginRight: '5px' }}
//                             >
//                                 Editar
//                             </button>

//                             <button
//                                 type="button"
//                                 onClick={() => { removerItem(item.id); }}
//                                 style={{ color: 'red' }}
//                             >
//                                 Excluir
//                             </button>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }

// export default CriarItem