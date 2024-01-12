const catalogoFilmes = document.querySelector('.filmes');
const botaoPesquisa = document.querySelector('.caixa-pesquisa__botao');
const caixaPesquisa = document.querySelector('.caixa-pesquisa__input');
const checkBoxFavoritos = document.querySelector('input[type="checkbox"]')

import { chave } from "./chave.js";

  async function pesquisarFilme() {
    const pesquisaFilme = document.querySelector('[data-pesquisa]').value;
    const busca = await buscaFilme(pesquisaFilme);

    limpaFilmes();

    busca.forEach(filme => adicionarFilme(filme))
  }

  function limpaFilmes() {
    while (catalogoFilmes.firstChild) {
      catalogoFilmes.removeChild(catalogoFilmes.firstChild);
    }
  }

  function checarSelecaoCheckBox() {
    const Checado = checkBoxFavoritos.checked
    if (Checado) {
      limpaFilmes();
      const filmes = filmesFavoritos() || [];
      filmes.forEach(filme => adicionarFilme(filme));
    } else {
      limpaFilmes();
      filmesPopulares();
    }
  }

  caixaPesquisa.addEventListener('keyup', function(evento) {
    if (evento.keyCode == 13) { // Tecla Enter
      pesquisarFilme();
      return;
    }
  })

  botaoPesquisa.addEventListener('click', evento => pesquisarFilme(evento));
  checkBoxFavoritos.addEventListener('change', checarSelecaoCheckBox);

async function buscaFilme(termoDaBusca) {
  const urlBusca = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${chave}&query=${termoDaBusca}&language=pt-BR`);
  const { results } = await urlBusca.json();
  return results;
}

async function listaFilmes() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${chave}&language=pt-BR`; 
  const urlConvertida = await fetch (url);
  const { results } = await urlConvertida.json();
  return results;
}

function adicionarStorage(filme) {
  const filmes = JSON.parse(localStorage.getItem('Filmes')) || []
  filmes.push(filme)
  const FilmesJSON = JSON.stringify(filmes)
  localStorage.setItem('Filmes', FilmesJSON)
}

function removerStorage(id) {
    const filmes = JSON.parse(localStorage.getItem('Filmes')) || []
    const FilmeAchado = filmes.find(filme => filme.id == id)
    const NovaListaFilmes = filmes.filter(filme => filme.id != FilmeAchado.id)
    localStorage.setItem('Filmes', JSON.stringify(NovaListaFilmes))
  }

function filmesFavoritos() {
  return JSON.parse(localStorage.getItem('Filmes')) || [];
}

function checarFavoritado(id) {
  const filmes = filmesFavoritos();
  return filmes.find(filme => filme.id == id);
}

function favoritar(evento, filme) {
  const Favorito = {
    Favoritado: 'imagens/Coracao_preenchido.svg',
    NaoFavoritado: 'imagens/Coracao.svg'
  }

  if (evento.target.src.includes(Favorito.NaoFavoritado)) { 
    evento.target.src = Favorito.Favoritado;
    adicionarStorage(filme);
  }  else {
    evento.target.src = Favorito.NaoFavoritado;
    removerStorage(filme.id)
  }
}

async function filmesPopulares() {
  const filmes = await listaFilmes();
  filmes.forEach(filme => adicionarFilme(filme))
}

window.onload = function() {
    filmesPopulares();
  };

function adicionarFilme(filme) {
  const { title, poster_path, vote_average, overview } = filme

  const foto_filme = `https://image.tmdb.org/t/p/w500${poster_path}`

  filme.isFavorited = checarFavoritado(filme.id);

  const li = document.createElement('li');
  li.classList.add('filmes__card');
  catalogoFilmes.append(li);

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
  curtir1.onclick = evento => (favoritar(evento, filme));
  divFavoritos.append(curtir1);
  curtir1.classList.add('filmes__card__div__favoritos__botaoFavorito');
  const txtCurtir1 = document.createElement('span');
  txtCurtir1.textContent = 'Favoritar';
  divFavoritos.append(txtCurtir1)

  li.append(divInfo);

  const descricao = document.createElement('p');
  descricao.classList.add('filmes__card__descricao');
  descricao.textContent = `${overview}`;

  li.append(descricao);
}
