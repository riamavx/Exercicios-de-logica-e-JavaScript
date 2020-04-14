//1. leia um numero e verifique se ele é par ou impar utilizando % 2 === 0

// const numero = parseInt(prompt('Digite um número qualquer'));

// if(numero%2 === 0){
// //alert(`Esse número ${numero} é par`)
// console.log('numero')
// } else {
//     alert(`Esse número ${numero} é impar`)
// }


// 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.

// const nota01 = parseInt(prompt('Digite a primeira nota'));
// const nota02 = parseInt(prompt('Digite a segunda nota'));


// if ((nota01 + nota02)/2 === 10){
//     alert( `Aprovado com distinção`)
// } else if((nota01 + nota02)/2 < 7){
//     alert(`Reprovado!`)
// } else if ((nota01 + nota02)/2 >= 7){
//     alert(`Aprovado!`)
// }


//3. faça um script que leia três numeros inteiros e mostre o maior deles
//Colocar mais uma condição para exibir msg se todos os numeros forem iguais


// const numero01 = parseInt(prompt('Digite o primeiro número'));

// const numero02 = parseInt(prompt('Digite o segundo número'));


// const numero03 = parseInt(prompt('Digite o terceiro número'));


// if(numero01 === numero02 && numero02 === numero03){
//     console.log(`Os números são iguais`);
// }else if(numero01 > numero02 && numero01 > numero03){
//     console.log (`numero01 é maior${numero01}`);
// } else if (numero02 > numero01 && numero02 > numero03){
//     console.log(`numero02 é maior'numero02`);
// } else{
//     console.log(`numeno03 é maior${numero03}`);
// }




//4. Faça um script que solicite dois inteiros e armazene-os em duas variáveis.
// Em seguida, selecione o valor das variáveis, inverta e exiba o antes e depois em uma janela de alerta.
//Fazer duas variáveis ​​de troca de valores entre si - Variável Auxiliar

// let x = parseInt(prompt('Digite o primeiro número'));
// let y = parseInt(prompt('Digite o segundo número'));
// let z = 0;  // minha variavel reserva que vai receber um valor

// console.log(`Valores finais ${x},${y},${z}`);


// x = 20;
// y = 100;
// z = 0;

// z = x  // recebeu 20
// x = y  // agora é 100
// y= z

// console.log( `valores finais ${x},${y},${z},`);



//Transforme os ifs abaixo em if ternario (condicao ? exp 1 : exp2 ).

// 1. 
// if(a > 0) {
// resultado = "valor maior que 0";
// } else {
// resultado = "valor = 0";
// }

// let a = 5;

// resultado = a>0 ? "a maior que zero" : "a menor que zero";

// console.log(resultado);




// 2.
// if(sexo === 'feminino') {
// alert('seja bem vinda');
// } else {
// alert('seja bem vindo')
// }

// const sexo = prompt("Digite seu sexo");

// sexo === 'feminino' ? alert('seja bem vinda') : alert('seja bem vindo');




// 3.
// var isIphone = false;
// var os;

// if (isIphone) {
//   os = "iOS";
// } else {
//   os = "Android";
// }

//  const isIphone = false;
//  let os = '';

//  (isIphone === true) ? os = 'IOS' : os = 'Android';

//  console.log(os);


// Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.
//  Após, crie uma estrutura condicional switch que 
//  receba esta variável e que possua três casos: caso maçã, retorne no console: “Não vendemos esta fruta aqui”.
//   Caso kiwi, retorne: “Estamos com escassez de kiwis” e caso melancia, retorne: “Aqui está, são 3 reais o quilo”. 
//   Teste com estas três opções e verifique o console do seu navegador.
//    Crie também um default, que retornará uma mensagem de erro no console.


const fruta = prompt('fruta');
switch (fruta) {
    case 'maça':
        console.log('Não vendemos esta fruta aqui');
        break;
    case 'kiwi':
        console.log('Estamos com escassez de kiwis');
        break;
    case 'melancia':
        console.log('são 3 reais o quilo');

        default:
            console.log('Erro');


}



