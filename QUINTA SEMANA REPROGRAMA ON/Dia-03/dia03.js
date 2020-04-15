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

let cargo = prompt('Digite seu cargo: Jr, Pl, Sr').toLocaleLowerCase();
let salario = '';
const base = 2500;

switch (cargo) {
    case 'junior':
        salario = base + (base * 0.2);
        break;
    case 'pleno':
        salario = base + (base * 0.35);
        break;
    case 'senior':
        salario = base + (base * 0.5);
        break;

    default:
        alert('Não é um cargo base');
}

alert(`Esse é o salario ${salario}`)















