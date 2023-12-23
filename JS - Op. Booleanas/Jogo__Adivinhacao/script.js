const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let tentativa;
for (let i = 0; i < 3; i++) {
  tentativa = prompt('Digite o número que você pensou (0 a 10) : ');
  if (tentativa === null) {
    alert('Saindo...');
    break;
  }
  if (tentativa > numero) {
    alert('O número é menor! ');
  } else if (tentativa < numero) {
    alert('O número é maior!');
  } else {
    alert('Você acertou!');
    break;
  }
}

if (tentativa != numero && tentativa != null) {
  alert(`Que pena, suas tentativas acabaram! O número era ${numero}.`);
}


