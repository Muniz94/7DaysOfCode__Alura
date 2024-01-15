import { conectaAPI } from "./conectaAPI.js";
import { funcoesJS } from "./funcoesJS.js";
import { renderizaFilme } from "./mostrarFilmes.js";

async function pesquisarFilme() {
  const pesquisaFilme = document.querySelector('[data-pesquisa]').value;
  const busca = await conectaAPI.buscaFilme(pesquisaFilme);

  funcoesJS.limpaFilmes();

  busca.forEach(filme => renderizaFilme.adicionarFilme(filme))
}

export const pesquisaFilme = {
  pesquisarFilme
}