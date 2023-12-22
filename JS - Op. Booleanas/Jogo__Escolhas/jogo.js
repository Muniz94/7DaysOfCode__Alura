const ulTecnologias = document.querySelector('.tecnologias');
const area = prompt('Quer se especializar em FRONT-END ou BACK-END?');
var ListaDeTecnologias = [];

if (area == 'Front-end') {
  prompt('Quer aprender REACT ou VUE?');
} else if (area == 'Back-end') {
  prompt('Quer aprender JAVA ou C#?');
}
const continuarNaArea = prompt(`Quer continuar se especializando na área de ${area} (digite 1) ou prefere se tornar Full-Stack (digite 2)?`);
if (continuarNaArea == 1) {
  alert(`Ótimo! Continue se especializando em desenvolvimento ${area}!`);
} 
else if (continuarNaArea == 2) {
  alert('Você escolheu se tornar Full-Stack!');
}
let tecParaAprender = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
while (tecParaAprender != null) {
  ListaDeTecnologias.push(tecParaAprender);
  alert(`Você escolheu a tecnologia ${tecParaAprender}...`);
  tecParaAprender = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
}
console.log(ListaDeTecnologias);

  ulTecnologias.append(ListaDeTecnologias);
  
 


