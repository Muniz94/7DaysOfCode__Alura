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

export const funcoesStorage = {
  adicionarStorage,
  removerStorage,
  filmesFavoritos,
}