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


// 1. Faça um algoritmo que receba uma letra e determine se é uma vogal ou consoante 
// (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);

// const letrasDoAlfabeto = prompt('Digite uma letra qualquer [A-Z]');

// switch (letrasDoAlfabeto) {
//     case 'a':

//     case 'e':

//     case 'i':

//     case 'o':

//     case 'u':

//         alert(`Sua letra ${letrasDoAlfabeto} é uma vogal`);
//     break
//     default:
//         alert(`Sua letra ${letrasDoAlfabeto} é consoante`);
// }

// //outra forma de responder a questão
// const letra = prompt('digite uma letra');

// if (letra === 'a'||
//  letra === 'e' ||
//   letra === 'i' ||
//   letra === 'o' ||
//   letra === 'u') {
//     alert('vogal');
// } else {
//     alert('consoante');
// }


//3. Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem;

// const meses = parseInt(prompt('Digite um número de [1-12]'));

// switch (meses) {
//     case 1:
//         alert('Seu mês é Janeiro e possui 31 dias');
//         break
//     case 2:
//         alert('Seu mês é Fevereiro e possui 28 ou 29 dias');
//         break
//     case 3:
//         alert('Seu mês é Março e possui 31 dias');
//         break
//     case 4:
//         alert('Seu mês é Abril e possui 30 dias');
//         break
//     case 5:
//         alert('Seu mês é Maio e possui 31 dias');
//         break
//     case 6:
//         alert('Seu mês é Junho e possui 30 dias');
//         break
//     case 7:
//         alert('Seu mês é Julho e possui 31 dias');
//         break
//     case 8:
//         alert('Seu mês é Agosto e possui 31 dias');
//         break
//     case 9:
//         alert('Seu mês é Setembro e possui 30 dias');
//         break
//     case 10:
//         alert('Seu mês é Outubro e possui 31 dias');
//         break
//     case 11:
//         alert('Seu mês é Novembro e possui 30 dias');
//         break
//     case 12:
//         alert('Seu mês é Dezembro e possui 31 dias');
//         break
//         default:
//             alert('Seu numero não consta como um mês! Feijoada');
//     }



//5. Escreva um código que receba um número e determine se ele é par ou ímpar, e se é negativo ou positivo;
// Se o numero for par ele é divisivel por dois (ex: 4%2 = 0)
//Se o numero é impar, ele n é divisivel por dois (ex: 5%2!=0)
// Se o numero for positivo é maior que zero
// se o numero for negativo é menor que zero

// const numero = parseInt(prompt('Digite um número'));

// if (numero%2=== 0 && numero>0){
//     alert(`Esse número ${numero} é par e positivo`)

// } else if(numero%2===0 && numero<0){
//     alert(`Esse número ${numero} é par e negativo`)
// }else if(numero%2 !==0 && numero >0){
//     alert(`Esse número ${numero} é impar e positivo`)
// }else if(numero%2 !==0 && numero <0){
//     alert(`Esse número ${numero} é par e negativo`)
// }else {
//     alert(`${numero} é um número neutro`);
// }



// 6. Escreva um código que receba três ângulos e determine se eles formam um triângulo válido.
//  Em um triângulo válido, a soma dos três ângulos é igual a 180º.


// const angulo1 = parseInt(prompt('Digite um ângulo qualquer'));

// const angulo2 = parseInt(prompt('Digite um segundo ângulo'));

// const angulo3 = parseInt(prompt('Digite um terceiro ângulo'));


// if (angulo1+angulo2+angulo3 ==180){
//     alert(`Ele é um triângulo válido`)
// }else {
//      alert(`Não é um triângulo válido`)
// }


//7.. Elaborar um algoritmo que lê 2 valores a e b e informa se são múltiplos ou não.

// const valorA = parseInt(prompt('Digite um número'));
// const valorB = parseInt(prompt('digite um segundo número'));

// if(valorA%valorB === 0){
//     alert(`Esses valores são múltiplos`)
// } else{
//     alert(`Esses números não são múltiplos`)
// }


// 8. Crie um código que retorne a quantidade de pontos que seu time fez de acordo com o resultado do jogo.
//  (Se o seu time venceu, ele recebe 3 pontos. Se o resultado foi empate,
//      ele recebe 1 ponto. Se ele perdeu, não recebe nada.)

// const resultadoDoJogo = prompt('Digite aqui se seu time venceu,empatou ou perdeu');

// if (resultadoDoJogo == 'venceu') {
//     alert(`Você acumulou 03 pontos!`)
// } else if (resultadoDoJogo == 'empatou') {
//     alert('Você acumulou 01 ponto')
// } else {
//     alert('Não recebe nenhum ponto')
// }



//9. Elabore um programa que dada a idade de um nadador classifica-o em uma das seguintes categorias:

// Infantil A = 5 - 7 anos
// Infantil B = 8-10 anos
// Juvenil A = 11-13 anos
// Juvenil B = 14-17 anos
// Adulto = maiores de 18 anos


// const idadeDoNadador = parseInt(prompt('Qual sua idade?'));

// if(idadeDoNadador >=5 && idadeDoNadador <= 7){
//     alert(` ${idadeDoNadador} Infantil A`)

// } else if(idadeDoNadador >= 8 && idadeDoNadador <= 10){
//     alert(`${idadeDoNadador} anos, Infantil B`)
// }else if(idadeDoNadador >= 11 && idadeDoNadador <=13){
//     alert(`${idadeDoNadador} anos, Juvenil A`)
// }else if(idadeDoNadador >= 14 && idadeDoNadador <=17){
//     alert(`${idadeDoNadador} anos, Juvenil B`)
// } else{
//     alert(`Adulto`)
// }




//Exercícios [menos] simples

// // 4. Uma empresa concederá um aumento de salário aos seus funcionários,
//  variável de acordo com o cargo, conforme a tabela abaixo. Faça um algoritmo que leia o salário e o cargo
//   de um funcionário e calcule o novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá, então,
//    receber 40% de aumento. Mostre o salário antigo, o novo salário e a diferença.

// Código	Cargo	Percentual
// 101	Gerente	10%
// 102	Engenheiro	20%
// 103	Técnico	30%











