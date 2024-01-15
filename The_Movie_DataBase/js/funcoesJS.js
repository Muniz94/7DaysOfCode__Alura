import { funcoesStorage } from "./funcoesStorage.js";
import { renderizaFilme } from "./mostrarFilmes.js";

const catalogoFilmes = document.querySelector('.filmes');
const checkBoxFavoritos = document.querySelector('input[type="checkbox"]');

function limpaFilmes() {
  while (catalogoFilmes.firstChild) {
    catalogoFilmes.removeChild(catalogoFilmes.firstChild);
  }
}

function checarSelecaoCheckBox() {
  const Checado = checkBoxFavoritos.checked
  if (Checado) {
    limpaFilmes();
    const filmes = funcoesStorage.filmesFavoritos() || [];
    filmes.forEach(filme => renderizaFilme.adicionarFilme(filme));
  } else {
    limpaFilmes();
    renderizaFilme.filmesPopulares();
  }
}

function checarFavoritado(id) {
  const filmes = funcoesStorage.filmesFavoritos();
  return filmes.find(filme => filme.id == id);
}
  
  function favoritar(evento, filme) {
  const Favorito = {
    Favoritado: 'imagens/Coracao_preenchido.svg',
    NaoFavoritado: 'imagens/Coracao.svg'
  }
  if (evento.target.src.includes(Favorito.NaoFavoritado)) { 
    evento.target.src = Favorito.Favoritado;
    funcoesStorage.adicionarStorage(filme);
  }  else {
    evento.target.src = Favorito.NaoFavoritado;
    funcoesStorage.removerStorage(filme.id)
  }
}

export const funcoesJS = {
  favoritar,
  checarFavoritado,
  checarSelecaoCheckBox,
  limpaFilmes
}

