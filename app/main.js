// CONSTANTE PARA ARMAZENAR OS LIVROS
let livros = [];
// CONST  da api para puxar os dados
const endpointDaAPI =
  'https://guilhermeonrails.github.io/casadocodigo/livros.json';

//invoca a função para puxar os dados referente a api
getBuscarLicrosDaAPI();
const elementosParaInserirLivros = document.getElementById('livros');

async function getBuscarLicrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  // console.log(livros)
  exebirOsLivrosNaTela(livros);
}

//função que acrecenta os itens puxados da api e registra tudo no id lista
function exebirOsLivrosNaTela(listaDeLivros) {
  listaDeLivros.forEach((livro) => {
    elementosParaInserirLivros.innerHTML += `${livro.titulo} R$${livro.preco}0 <br>`;
  });
}
