let resposta;
let item;
let categoria;
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

  resposta = confirm("Você deseja adicionar itens a sua lista de supermercado?");
}

const paragrafo = document.createElement('p');

  paragrafo.innerHTML = `Lista de Compras: <br> Congelados: ${categorias.congelados} <br> Frutas: ${categorias.frutas} 
  <br> Doces: ${categorias.doces} <br> Laticínios: ${categorias.laticinios} `;

lista.append(paragrafo);