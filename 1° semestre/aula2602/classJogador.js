class Jogador { //classe mãe

    #nome;
    #numero;
    
    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    treinar(){
        return '3 vezes na semana';
    }

    getNome(){
        return this.#nome
    }
    getNumero(){
    return this.#numero
    }

}

//classe jogadorFutebol - classe filha
class jogadorFutebol extends Jogador{
    #peDominante;
    #totalGols

    constructor (peDominante, totalGols, nome, numero){
        this.#peDominante = peDominante
        this.#totalGols = totalGols
        super(nome,numero)
    }
 
    driblar(){
        return 'Tomou uma caneta';
    }
    fazerGol (qntsGols){
        return this.#totalGols += qntsGols
    }

//super acessa tributos e metodos da classe mae
    mostrar(){
        return 'o jogador' + super.getNome() + ' numero ' + super.getNumero() + ' pe dominante ' + this.#peDominante + ' tem ' + this.#totalGols + ' gols '
    }
}

const jogador = new jogadorFutebol('esquerdo',20,'kelvin destaque',7)
jogador.fazerGol(2)
console.log(jogador.mostrar())