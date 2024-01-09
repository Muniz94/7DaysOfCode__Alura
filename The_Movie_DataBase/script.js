const listaFilmes = document.querySelector('.filmes');

import { chave } from "./chave.js";

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

  imagem.alt = `Ícone ${filme.title}`;
  imagem.setAttribute('src', filme.image);

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
