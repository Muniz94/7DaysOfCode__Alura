const listaFilmes = document.querySelector('.filmes');
const botaoPesquisa = document.querySelector('.caixa-pesquisa__botao');
const caixaPesquisa = document.querySelector('.caixa-pesquisa__input');

import { chave } from "./chave.js";

  async function PesquisarFilme() {
    const pesquisaFilme = document.querySelector('[data-pesquisa]').value;
    const busca = await buscaFilme(pesquisaFilme);

    while (listaFilmes.firstChild) {
      listaFilmes.removeChild(listaFilmes.firstChild);
    }

    busca.forEach(filme => adicionarFilme(filme))
  }

  caixaPesquisa.addEventListener('keyup', function(evento) {
    if (evento.keyCode == 13) { // Tecla Enter
      PesquisarFilme();
      return;
    }
  })

  botaoPesquisa.addEventListener('click', evento => PesquisarFilme(evento));

async function buscaFilme(termoDaBusca) {
  const urlBusca = `https://api.themoviedb.org/3/search/movie?api_key=${chave}&query=${termoDaBusca}&language=pt-BR`;
  const urlBuscaConvertida =  await fetch (urlBusca);
  const { results } = await urlBuscaConvertida.json();
  return results;
}

async function ListaFilmes() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${chave}&language=pt-BR`; 
  const urlConvertida = await fetch (url);
  const { results } = await urlConvertida.json();
  return results;
}

window.onload = async function() {
  const filmes = await ListaFilmes();
  filmes.forEach(filme => adicionarFilme(filme))
}

function adicionarFilme(filme) {
  const { title, poster_path, vote_average, overview } = filme

  const foto_filme = `https://image.tmdb.org/t/p/w500${poster_path}`

  const li = document.createElement('li');
  li.classList.add('filmes__card');
  listaFilmes.append(li);

  const imagem = document.createElement('img');
  imagem.classList.add('filmes__card__imagem');

  imagem.alt = `Ícone ${foto_filme}`;
  imagem.setAttribute('src', foto_filme);

  li.append(imagem);

  const divInfo = document.createElement('div');
  divInfo.classList.add('filmes__card__div');
  

  const titulo = document.createElement('h2');
  titulo.classList.add('filmes__card__div__titulo');
  titulo.textContent = `${title}`
  divInfo.append(titulo)
  const divFavoritos = document.createElement('div');
  divFavoritos.classList.add('filmes__card__div__favoritos');
  const curtir = document.createElement('img');
  curtir.src = 'imagens/Star.svg'
  curtir.alt = 'Ícone de estrela'
  divFavoritos.append(curtir);
  const txtCurtir = document.createElement('span');
  txtCurtir.textContent = vote_average;
  divFavoritos.append(txtCurtir)
  divInfo.append(divFavoritos);
  const curtir1 = document.createElement('img');
  curtir1.src = filme.isFavorited ? 'imagens/Coracao_preenchido.svg' : 'imagens/Coracao.svg';
  curtir1.alt = filme.isFavorited ? 'Ícone de coração preenchido' : 'Ícone de coração';
  divFavoritos.append(curtir1);
  const txtCurtir1 = document.createElement('span');
  txtCurtir1.textContent = 'Favoritar';
  divFavoritos.append(txtCurtir1)

  li.append(divInfo);

  const descricao = document.createElement('p');
  descricao.classList.add('filmes__card__descricao');
  descricao.textContent = `${overview}`;

  li.append(descricao);
}
