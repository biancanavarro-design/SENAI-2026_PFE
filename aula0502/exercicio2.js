let prompt = require ('prompt-sync')();
let idade = prompt ("Informe sua idade ");

if (idade >= 16) {
    console.log ("Você tem idade suficiente pra pegar livros emprestados.");
} else {
    console.log("Você não tem idade para pegar livros emprestados");
}

if (idade >= 18){
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade")
}