import { funcoesJS } from "./funcoesJS.js";
import { conectaAPI } from './conectaAPI.js';
import { pesquisarFilme } from './pesquisaFilme.js';

const catalogoFilmes = document.querySelector('.filmes');
const botaoPesquisa = document.querySelector('.caixa-pesquisa__botao');
const caixaPesquisa = document.querySelector('.caixa-pesquisa__input');
const checkBoxFavoritos = document.querySelector('input[type="checkbox"]');

botaoPesquisa.addEventListener('click', evento => pesquisarFilme(evento));
checkBoxFavoritos.addEventListener('change', funcoesJS.checarSelecaoCheckBox);

caixaPesquisa.addEventListener('keyup', function(evento) {
  if (evento.keyCode == 13) { // Tecla Enter
    pesquisarFilme();
    return;
  }
})

async function filmesPopulares() {
  const filmes = await conectaAPI.listaFilmes();
  filmes.forEach(filme => adicionarFilme(filme))
}

window.onload = function() {
    filmesPopulares();
  };

function adicionarFilme(filme) {
  const { title, poster_path, vote_average, overview } = filme

  const foto_filme = `https://image.tmdb.org/t/p/w500${poster_path}`

  filme.isFavorited = funcoesJS.checarFavoritado(filme.id);

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
  curtir1.onclick = evento => (funcoesJS.favoritar(evento, filme));
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

export const renderizaFilme = {
  adicionarFilme,
  filmesPopulares,
  checkBoxFavoritos,
  catalogoFilmes
}