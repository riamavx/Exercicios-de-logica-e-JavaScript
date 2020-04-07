//4. Escreva um código que receba dois número e determine qual o maior entre eles;

// const num1 = prompt('Digite o primeiro número');
// const num2 = prompt('Digite o primeiro número');





//Switch

// const tipofruta = prompt('Tipo de fruta');


// switch (tipofruta) {
//     case "Laranja":
//       console.log("O quilo da laranja está R$0,59.<br>");
//       break;
//     case "Maçã":
//       console.log("O quilo da maçã está R$0,32.<br>");
//       break;
//     case "Banana":
//       console.log("O quilo da banana está R$0,48.<br>");
//       break;
//     case "Cereja":
//       console.log("O quilo da cereja está R$3,00.<br>");
//       break;
//     case "Manga":
//       console.log("O quilo da manga está R$0,56.<br>");
//       break;
//     case "Mamão":
//       console.log("O quilo do mamão está R$2,23.<br>");
//       break;
//     default:
//       console.log("Desculpe, não temos "  ${tipofruta}  ".<br>");
//   }
//   console.log("Gostaria de mais alguma coisa?<br>");


//2. Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente;

// const diaSemana = parseInt(prompt('Digite o dia da semana [1-7]'));

// switch (diaSemana){

//     case 1:
//         alert(`Domingo`);
//         break;

//         case 2:
//         alert(`Segunda`);
//         break;

//         case 3:
//         alert(`Terça-feira`);
//         break;

//         case 4:
//         alert(`Quarta-feira`);
//         break;

//         case 5:
//         alert(`Quinta-feira`);
//         break;

//         case 6:
//         alert(`Sexta-feira`);
//         break;

//         case 7:
//         alert(`Sábado`);
//         break;

//         default:
//         alert(`Dia de São Nunca`);
// }


//1. Faça um algoritmo que receba uma letra e determine se é uma vogal ou consoante 
//(Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);

// const letrasDoAlfabeto = prompt('Digite uma letra qualquer [A-Z]');

// switch (letrasDoAlfabeto) {
//     case 'a':
        
//     case 'e':
        
//     case 'i':
        
//     case 'o':
        
//     case 'u':
        
//         alert('Sua letra é vogal');
//     break
//     default:
//         alert('Sua letra é consoante');
// }

const letra = prompt('digite uma letra');

if (letra === 'a'||
 letra === 'e' ||
  letra === 'i' ||
  letra === 'o' ||
  letra === 'u') {
    alert('vogal');
} else {
    alert('consoante');
}







