let resposta;
let item;
let categoria;
let deletar;
const lista = document.querySelector('.lista');

const categorias = {
  congelados: [],
  frutas: [],
  doces: [],
  laticinios: [], 
}



resposta = confirm("Você deseja adicionar itens a sua lista de supermercado?");
while (resposta != false) {
  item = prompt('Qual item você deseja inserir?');
  if (item != null) {
    categoria = prompt('Em qual categoria esse item se encaixa?');
  }
  if (categoria == 'doces') { // compara o que foi digitado com a propriedade do objeto
    categorias.doces.push(item);
  } else if (categoria =='congelados') {
    categorias.congelados.push(item);
  } else if (categoria =='frutas') {
    categorias.frutas.push(item);
  } else if (categoria =='laticinios') {
    categorias.laticinios.push(item);
  }

  
  if (categorias.congelados.length != 0 || categorias.frutas.length != 0 || categorias.doces.length != 0 || categorias.laticinios.length != 0) {
    deletar = confirm("Você quer deletar algum item da lista?");
    if (deletar === true) {
      alert(`Itens da lista de compras: ${categorias.doces} || ${categorias.congelados} || ${categorias.frutas} || ${categorias.laticinios}`)
      deletar = prompt("Qual item você quer deletar?");
      if (categorias.doces.includes(deletar) || categorias.congelados.includes(deletar) || categorias.frutas.includes(deletar) || categorias.laticinios.includes(deletar)) {
        categorias.doces = categorias.doces.filter(item => item != deletar);
        categorias.congelados = categorias.congelados.filter(item => item != deletar);
        categorias.frutas = categorias.frutas.filter(item => item != deletar);
        categorias.laticinios = categorias.laticinios.filter(item => item != deletar);
      } else {
        if (deletar != null) {
          alert("Não foi possível encontrar seu item na lista");
        }
      }
    }
  }
  
  resposta = confirm("Você deseja adicionar itens a sua lista de supermercado?");
}

  const paragrafo = document.createElement('p');

  paragrafo.innerHTML = `Lista de Compras: <br> Congelados: ${categorias.congelados} <br> Frutas: ${categorias.frutas} 
  <br> Doces: ${categorias.doces} <br> Laticínios: ${categorias.laticinios} `;

lista.append(paragrafo);