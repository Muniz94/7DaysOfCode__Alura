import { chave } from './chave.js'

async function listaFilmes() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${chave}&language=pt-BR`; 
  const urlConvertida = await fetch (url);
  const { results } = await urlConvertida.json();
  return results;
}

async function buscaFilme(termoDaBusca) {
const urlBusca = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${chave}&query=${termoDaBusca}&language=pt-BR`);
const { results } = await urlBusca.json();
return results;
}

export const conectaAPI = {
  listaFilmes,
  buscaFilme
}