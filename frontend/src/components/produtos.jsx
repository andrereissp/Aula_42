// import { useEffect, useState } from 'react';

// function ListaDeProdutos() {
//   const [produtos, setProdutos] = useState([]);

//   useEffect(() => {
//     // Busca os dados da API apenas quando a tela carrega
//     fetch('https://fakestoreapi.com/products')
//       .then(resposta => resposta.json())
//       .then(data => setProdutos(data));
//   }, []); // [] significa: roda apenas no "load" do componente

//   return (
//     <div style={{background: "#1725752f", borderRadius: "15px"}}>
//       <ul style={{display: "flex",  listStyle: "none", flexWrap: "wrap"}}>
//         {produtos.map(produto => <li key={produto.id}>
//           <div style={{background: "#5e5e5e", color: "white", padding: "0 5px", margin: "10px", width: "250px", display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "15px"}}>
//             <img src={produto.image} alt="imagem-do-produto" height="100%" width="55%" style={{background: "#ffffff42", borderRadius: "15px", padding: "25%"}}/>
//             <div>
//               <h2 style={{position: "relative", bottom: "100px", background:"#ffffff3b", color: "black", padding: "25px 3px", borderRadius: "15px" }}>Oferta do dia!</h2>
//               <p>{produto.description}</p>
//               <p><strong>Preço: </strong> R${produto.price}</p>
//             </div>
//           </div>
//         </li>)}
//       </ul>
//     </div>

//   );
// }

// export default ListaDeProdutos