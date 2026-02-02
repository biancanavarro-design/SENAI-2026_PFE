//Solicite um número ao usuário, e depois um segundo, verifique qual deles é o maior,
// se são iguais e caso um deles ou os dois forem iguais a z zero, informe.

let numero1 = Number(prompt('Digite o primeiro número:'));
let numero2 = Number(prompt('Digite o segundo número:'));

// verifica se algum é zero
if (numero1 === 0 && numero2 === 0) {
    console.log('Os dois números são iguais a zero');
} else if (numero1 === 0 || numero2 === 0) {
    console.log('Um dos números é igual a zero');
}

// verifica qual é maior ou se são iguais
if (numero1 > numero2) {
    console.log('O primeiro número é maior');
} else if (numero2 > numero1) {
    console.log('O segundo número é maior');
} else {
    console.log('Os dois números são iguais');
}
