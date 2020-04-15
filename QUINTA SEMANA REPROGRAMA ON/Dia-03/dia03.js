//1.
// let nomeDoMes = " "
// let mes = parseInt(prompt('Digite um numero de [1-12]'));

// switch (mes) {
//     case 1:
//         nomeDoMes = 'janeiro';
//         break;
//     case 2:
//         nomeDoMes = 'Fevereiro';
//         break;
//     case 3:
//         nomeDoMes = 'Março';
//         break;
//     case 4:
//         nomeDoMes = 'Abril';
//         break;
//     case 5:
//         nomeDoMes = 'Maio';
//         break;
//     case 6:
//         nomeDoMes = 'Junho';
//         break;
//     case 7:
//         nomeDoMes = 'Julho';
//         break;
//     case 8:
//         nomeDoMes = 'Agosto';
//         break;
//     case 9:
//         nomeDoMes = 'Setembro';
//         break;
//     case 10:
//         nomeDoMes = 'Outubro';
//         break;
//     case 11:
//         nomeDoMes = 'Novembro';
//         break;
//     case 12:
//         nomeDoMes = 'Dezembro';
//         break;

//     default:
//         nomeDoMes = 'Mês inválido';

// }
// alert(nomeDoMes);



// 3. Calcule o valor do salario do dev conforme valores abaixos.
// salario Base: R$ 2.500,00
// salario Junior = salario base + 20%
// salario Pleno = salario base + 35%
// salario senior = salario base + 50% 



// let salarioBase = 2500;
// let salarioJunior =  salarioBase + (salarioBase*0.2);
// alert(`O salário do Jr é R$${salarioJunior}`);
// let salarioPleno = salarioBase + (salarioBase * 0.35);
// alert(`O salário do Pl é R$${salarioPleno}`);
// let salarioSenior = salarioBase + (salarioBase * 0.5); 
// alert(`O salário do Sr é R$${salarioSenior}`);



// salario Base: R$ 2.500,00
// salario Junior = salario base + 20%
// salario Pleno = salario base + 35%
// salario senior = salario base + 50% 

// let cargo = prompt('Digite seu cargo: Jr, Pl, Sr').toLocaleLowerCase();
// let salario = '';
// const base = 2500;

// switch (cargo) {
//     case 'junior':
//         salario = base + (base * 0.2);
//         break;
//     case 'pleno':
//         salario = base + (base * 0.35);
//         break;
//     case 'senior':
//         salario = base + (base * 0.5);
//         break;

//     default:
//         alert('Não é um cargo base');
// }

// alert(`Esse é o salario ${salario}`)


// 1. Crie um Objeto pessoa que receba as propriedades: nome, telefone, idade, altura e peso.

// const pessoa = {
//     nome: 'Maria',
//     telefone: 11000000000,
//     idade: 25,
//     altura: 1.48,
//     peso: 49

// }
//console.log(pessoa);

// 2. Crie um objeto animal que receba as propriedades: porte(pequeno, médio ou grande), especie, raça.

// let animal = {
//     nome: 'Leão',
//     porte: 'grande',
//     especie: 'mamífero carnívoro',
//     raça: 'leonino'
// }
// console.log(animal)

// 3. Crie um objeto curso que receba as propriedades: nome, período, professor(a).  

// let curso = {
//     nome: 'Direito internacional',
//     período: 'Segundo',
//     professor: 'Lula'
// }

// curso = JSON.stringify(curso); // oJSON foi usado para converter objeto em string para que quando for dado alert aparecer na minha tela
// alert(curso);

// 1. Crie uma lista (string), que contenha o nome de 10 alunas da reprograma.
// Em seguida, verifique o tamanho, e qual aluna está na posição 5.

// let lista = ['Sara' , 'Vivi', 'Millena' , 'Tabita' , 'Liana' , 'Gabi' , 'Od' , 'Talisia' , 'Marisa' , 'Lorena'];

// lista.length //ele ve o tamanho da minha lista
// console.log(lista[4]);


// 2. Crie uma lista de matérias que contenha 6 matérias, e mostre qual matéria está na posição 4.

// let materias = ['UX', 'HTML' , 'CSS' , 'Lógica', 'Git' , 'Github'];
// console.log(materias[4]);



// 3. Crie uma lista de números fora de ordem e ordene-a utilizando o método .sort();

// let numeros = [1, 2, 5, 4, 7, 6];


// console.log(numeros.sort());

// 4. Crie uma lista vazia e verifique se o length == 0 (se a lista estiver vazia) .push() inserindo algum valor dentro.
// Se o length for maior > 0 alert() mostrando o tamanho.

let lista = [];
console.log(lista, "valor inicial da lista");

if(lista.length === 0) {
    lista.push("oi");
    console.log(lista, "dentro do primeiro if");
} 
if (lista.length > 0 ) {
    console.log(lista.length, "dento do segundo if")
}













