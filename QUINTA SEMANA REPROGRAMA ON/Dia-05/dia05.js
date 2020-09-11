//1. faça um loop que mostre 15 vezes uma msg ("Olá Reprograma")
// let nomes = [
//     'Marta',
//     'Maria',
//     'Maroca',
//     'Matuta',
//     'Manteiga',
//     'Marina',
//     'Maracatu',
//     'Manga',
//     'Mar',
//     'Mente',
//     'Manto',
//     'Maracatuba',
//     'Mahhhddh',
//     'Maxixe',
//     'Mahahdh',
//     'Msdhhd',
// ];

// for(let i = 0; i<=14; i++){
//     alert(`Seja bem-vinda ${nomes[i]}`);
// }

// for(let i = 1 ; i<=15 ; i++){
//     console.log('Olá Reprograma');

// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

//2. crie um array de string, percorram (for of) exibindo cada texto do array

// let nomes = [
//     'Marta',
//     'Maria',
//     'Maroca',
//     'Matuta',
//     'Manteiga',
//     'Marina',
//     'Maracatu',

// ];

// for(letra of nomes){
//     console.log(letra);
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3. Criem array de string, percorram (for of) exibindo  apenas uma propriedade.
// [
//     {
//         nome: "",
//         idade: 0
//     }
//     {
//         nome: "",
//         idade: 1
//     }
// ]

// x console.log(x.propriedade);

// let frutas = [
//     {
//         nome: 'maça',
//         cor: 'vermelha',
//         sabor: 'Doce suave'
// },
//     {
//         nome: 'manga',
//         cor: 'amarela',
//         sabor: 'Doce'
// },
// {
//     nome: 'kiwi',
//     cor: 'estranha',
//     sabor: 'azedinho'
// },
// {
//     nome: 'uva',
//     cor: 'roxa',
//     sabor: 'Doce'
// }
// ]

// for (a of frutas){
//     console.log(a.sabor);
// }





//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 4. um loop que leia (prompt) o nome de 5 pessoas

// for(let i = 1; i<= 5; i++){
//     let nomes = prompt('Digite seu nome');
//     console.log(nomes);
// }

//A ideia dessa questao é fazer com que meu prompt seja digitado uma vez mas peça 5 nomes e para evitar
// que eu repetisse varias vezes o prompt ele foi colocado dentro do for

// let listaDeNomes =[];
// for(let i = 1; i<= 5; i++){
//     let nomes = prompt('Digite seu nome');
//     listaDeNomes.push(nomes);
//     console.log(listaDeNomes); //se o console ficar do lado de fora ele so mostra o resultado no final
// }

//5. Faça um programa que recebe 10 numeros,
//calcule e imprima a soma dos numeros pares e a soma dos numeros impares.

//quebrando o problema:
// for para ler 10 prompt


// let numero = 0, somaPares = 0, somaImpares = 0, contPar = 0, contImpar = 0;


// for (let num = 1; num <= 10; num++) {
//     numero = parseInt(prompt(`Digite o número ${num} :`));
//     if (num % 2 === 0) {
//         contPar++
//         somaPares += numero;


//     } else {
//         contImpar++;
//         somaImpares += numero

//     }

// }
// console.log(somaImpares, 'soma de numeros impares');
// console.log(somaPares, 'soma dos numeros pares');
// console.log(contPar, 'total de pares');
// console.log(contImpar, 'total de numeros impares');

///////////////////////////////////////////////////////////////////////////////////////

//6. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas.calcule e imprima:
//total de homens
//total de mulheres
//media das idades dos homens
//media das idades das mulheres


// quebrando o problema
// for ate 10 >= 3 prompt (idade peso e sexo)
// contar quantas mulheres
// quantos homens
//soma antes

// media de idade de homens (soma das idades)
// media dos pesos das mulheres (soma dos pesos)

//media = soma/quantidade