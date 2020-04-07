// 1. Crie um algoritmo que dado um valor, calcule 5% de desconto e retorne o valor do desconto;

// let preco = parseInt(prompt('Digite o valor'));

// preco *= 0.05;
// alert(`O valor do desconto é R$ ${preco}`)






// 2. Crie um algoritmo que receba dois valores e exiba o resultado e o resto da divisão entre eles;

// let valor1 = parseInt(prompt('Digite um numero'));
// let valor2 = parseInt(prompt('Digite um numero'));

// let resultado = valor1/valor2;
// let resto = valor1%valor2;

// alert(`O resultado da divisão é ${resultado} e o resto é ${resto}`);



// 3. Crie um algoritmo que calcule quantos dias o usuário viveu, baseado na idade 
// (considere que a pessoa tenha a idade exata);

// let idade = parseInt(prompt('Digite sua idade'));

// let dias = idade* 365;

// alert(`A quantidade de dias de vida é ${dias} `)









// 4. Faça um algoritmo que leia a idade de uma pessoa em dias e mostre-a em anos, meses e dias 
// (assuma que todos os meses tem 30 dias, e todos os anos 365 dias);

// const idadeEmDias = prompt ('Digite quantos dias você já viveu');

// const anos = parseInt(idadeEmDias/365);

// const meses =parseInt((idadeEmDias%365)/30);

// const dias = (idadeEmDias%365)%30;



// 5. Wenceslay gostaria de saber quantos litros por quilômetro, sua moto gastou em média.
//  Ele sabe a distância rodada e a quantidade de litros de combustível que ele utilizou. 
// Crie um algoritmo que mostre a Wenceslay qual a média de combustível gasto por quilômetro.

// const kmRodados = parseInt(prompt('Km rodados'));

// const combustivel = parseInt(prompt('combustivel gasto'));

// const mediaDeLitrosPorKm = (combustivel/kmRodados);

// alert(`A media de litros gasta é ${mediaDeLitrosPorKm}`)


// 6. O gerente ficou louco! E agora não sabe quanto de desconto deu nos seus produtos para fazer o anúncio. 
// Ele sabe o preço sem o desconto e com o desconto. 
// Faça um algoritmo que calcule o percentual de desconto do produto.


// const precoSemDesconto = prompt('Preço sem desconto');

// const precoComDesconto = prompt('Preço com desconto');

// const percentualDoPrecoComDesconto = parseFloat((precoComDesconto * 100) / precoSemDesconto);

// const percentualDeDesconto =parseFloat ((100 - percentualDoPrecoComDesconto));

// alert(`O percentual do desconto será ${percentualDeDesconto}%`);





// 7. Zenir é responsável por colocar a duração dos filmes no letreiro do cinema comunitário.
// A duração deve ser mostrada em minutos, mas alguns dos filmes exibidos vieram com a informação em horas e minutos.
// Ajude Zenir, ela tem mais o que fazer do que ficar fazendo conta.

// const duracaoHoras = ('Duração em horas');
// const duracaoMinutos = ('Duração em minutos');

// let duracaoTotal = duracaoHoras*60;

// duracaoTotal += parseInt(duracaoMinutos);

// alert(`O filme possui duração de ${duracaoTotal} minutos`);




// 8. Marisa trabalha como cronometrista numa maratona. 
// O resultado da maratona é dado em segundos.
// Marisa precisa converter o resultado para o formato hh:mm:ss. Ajude Marisa.




// //Recebendo os dados do usuario
// const resultadoSegundos = prompt('Digite o resultado em segundos');


// //convertendo segundos para hora
// const horas = parseInt(resultadoSegundos/3600);



// //convertendo segundos para minuto
// //  Divide o resto da conta de seg por 3600 (horas), por 60 para descobrir os minutos
// const minutos = parseInt((resultadoSegundos%3600) /60) ;


// const segundos = parseInt((resultadoSegundos%3600) %60) ;

// alert(`${horas}:${minutos}:${segundos}`)





