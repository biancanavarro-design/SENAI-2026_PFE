class Estudante {
    nome;
    #ra;
    #cpf;
    #saldo

    constructor (nome,ra,cpf){
        this.nome = nome
        this.#ra = ra
        this.#cpf = cpf
    }
}

const Noemi = new Estudante('Noemi da Silva',
    3333333,33333333);
    console.log(Noemi);
