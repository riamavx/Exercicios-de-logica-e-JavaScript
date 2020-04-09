//1. Faça um algoritmo que imprima números inteiros de n a 1;


// const numero = parseInt(prompt('Digite um número'));


// for (let i = numero; i >= 1; i--){
//     console.log(i);
// }


//mais um exemplo
// const numero = parseInt(prompt('Digite um número qualquer'));
// for (let i = numero; i >= -13; i--){
//     console.log(i);
// }

//USANDO O WHILE PARA RESPONDER ESSA QUESTÃO
// let numero = parseInt(prompt('Digite um número'));
// while (numero >= 1){
//     console.log(numero);
//     numero--;
// }


//2. Faça um algoritmo que imprima apenas os números ímpares de 1 a 100;


// for (let i = 1; i <= 100; i++){

//     if(i%2 !== 0){
//         console.log(`O número ${i} é ímpar`)
//     }

// }

// let i = 1

// while(i >= 1 && i<=100){
//     if(i%2) !=0{
//         console.log()

//     }

// }


//3. Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000.
//condição de parada: chegar ao 1000
//condição: somar apenas n multiplos de 3 e 5

// Condição de parada: Chegar ao 1000
// Condição: Somar apenas números múltiplos de 3 e 5
// Exemplo: 15 + 30 + ...

// let soma = 0;
// // soma é criado do lado de fora para manter o valor dos numero somados

// for (let i = 1; i < 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         soma += i; // soma = soma + i;
//         console.log('i', i);
//         console.log('soma', soma);
//     }
// }

// alert(`A soma dos múltiplos de 3 e 5 é ${soma}`);


//COM WHILE
// let soma = 0;
// let contador = 1;

// while(contador < 1000){
//     if (contador % 3 === 0 && contador % 5 === 0) {
//     soma += contador;

// }
// contador++;
// }

// alert(`A soma é ${soma}`)



//4. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa
 //que dado um número, print (console.log) a tabuada do mesmo de 1 a 10.

//  const numero = parseInt(prompt('Digite um número de [1-10]'));
//  for (let i = 1; i <= 10; i++){

//         console.log(numero*i);
//      }





//5. Faça um programa que leia um array  e informe o maior número.

// const listaNumero = [8, 16, 31, 25, 24, 40, 93, 2, 54];

// let maiorNumero = 0;

// for (let i = 0; i < listaNumero.length; i++) {
//     if (listaNumero[i] > maiorNumero) {
//         maiorNumero = listaNumero[i];
//     }
// }


//6. Faça um Programa que leia um array de 5 números inteiros e mostre-os. (Fazer com a mamãe)
// const numeros = [15, 10, 3 , 5, 4];
// for(let i=0; i< numeros.length;i++){
    
//     console.log(numeros[i])
// }