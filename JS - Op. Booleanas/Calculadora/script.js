const html = document.querySelector('.html');
const soma = document.querySelector('.soma');
const subtracao = document.querySelector('.subtracao');
const multiplicacao = document.querySelector('.multiplicacao');
const divisao = document.querySelector('.divisao');
const sair = document.querySelector('.sair');
let op = 0;
let num1 = 0;
let num2 = 0;
let res = 0;

  sair.addEventListener('click', funcaoSair);

  soma.onclick = () => {
    funcaoSoma(num1, num2);
  }

  subtracao.onclick = () => {
    funcaoSubtracao(num1, num2);
  }

  divisao.onclick = () => {
    funcaoDivisao(num1, num2);
  }

  multiplicacao.onclick = () => {
    funcaoMultiplicacao(num1, num2);
  }

    function funcaoSair() {
      alert("Até a próxima...");
      html.innerHTML = '';
    }
    
    function funcaoSoma(n1, n2) {
      n1 = prompt('Digite o 1º número: ');
      if (n1 == null) {
        return;
      }
      n2 = prompt('Digite o 2º número: ');
      if (n2 == null) {
        return;
      }
      res = parseInt(n1) + parseInt(n2);
      alert('O resultado da soma é: ' + res);
    }

    function funcaoSubtracao(n1, n2) {
      n1 = prompt('Digite o 1º número: ');
      if (n1 == null) {
        return;
      }
      n2 = prompt('Digite o 2º número: ');
      if (n2 == null) {
        return;
      }
      res = parseInt(n1) - parseInt(n2);
      alert('O resultado da subtração é: ' + res);
    }

    function funcaoMultiplicacao(n1, n2) {
      n1 = prompt('Digite o 1º número: ');
      if (n1 == null) {
        return;
      }
      n2 = prompt('Digite o 2º número: ');
      if (n2 == null) {
        return;
      }
      res = parseInt(n1) * parseInt(n2);
      alert('O resultado da multiplicação é: ' + res);
    }

    function funcaoDivisao(n1, n2) {
      n1 = prompt('Digite o 1º número: ');
      if (n1 == null) {
        return;
      }
      n2 = prompt('Digite o 2º número: ');
      if (n2 == null) {
        return;
      }
      res = parseInt(n1) / parseInt(n2);
      alert('O resultado da divisão é: ' + res);
    }