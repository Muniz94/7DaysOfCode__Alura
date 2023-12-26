const formulario = document.querySelector('.formulario');
const botao = document.querySelector('.formulario__botao');
const campoNome = document.querySelector('.formulario__blocoDeCampos__nome');
const campoData = document.querySelector('.formulario__blocoDeCampos__data');
const tabela = document.querySelector('.tabela');

let pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];

function criarTabela(item) {

  const li = document.createElement('li');
  li.textContent = 'Nome: ' + item.nome + ' || Data de Nascimento: ' + item.data_de_nascimento + ' || ';

  const botaoEditar = document.createElement('button');
  botaoEditar.textContent = 'Editar';

  const botaoDeletar = document.createElement('button');
  botaoDeletar.textContent = 'Deletar';

  li.append(botaoEditar);
  li.append(botaoDeletar);

  botaoEditar.onclick = () => {
    const novoNome = prompt('Novo nome: ');
    const novaDtNasc = prompt('Nova data de nascimento: ');
    item.nome = novoNome;
    item.data_de_nascimento = novaDtNasc;
    localStorage.setItem('pessoas', JSON.stringify(pessoas));

    campoNome.value = "";
    campoData.value = "";

    tabela.textContent = '';

    pessoas.forEach(item => {
      const elemento = criarTabela(item);
      tabela.append(elemento);
    });
  }

  botaoDeletar.onclick = () => {
    li.remove();
    pessoas = pessoas.filter(sujeito => sujeito != item);
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
  }

  return li;
}


formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const pessoa = {
    nome: campoNome.value,
    data_de_nascimento: campoData.value,
  }
  pessoas.push(pessoa);
  const elemento = criarTabela(pessoa);
  tabela.append(elemento);

  campoNome.value = "";
  campoData.value = "";

  localStorage.setItem('pessoas', JSON.stringify(pessoas));
  
});

pessoas.forEach(item => {
  const elemento = criarTabela(item);
  tabela.append(elemento);
});

 





