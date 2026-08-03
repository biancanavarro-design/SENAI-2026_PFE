class Jogador {

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
        return this.#nome;
    }

    getNumero(){
        return this.#numero;
    }
}



class JogadorFutebolAmericano extends Jogador {

    #listaJogadas;
    #jardasConquistadas;

    constructor(listaJogadas, jardasConquistadas, nome, numero){
        super(nome, numero);
        this.#listaJogadas = listaJogadas;
        this.#jardasConquistadas = jardasConquistadas;
    }

    fazerTouchDown(){
        return 'O jogador número ' + super.getNumero() + ' fez touchdown';
    }

    bloquear(){
        return 'O jogador realizou um bloqueio';
    }

    correrJardas(valor){
        this.#jardasConquistadas += valor;
        return 'Correu ' + valor + ' jardas';
    }

    mostrar(){
        return 'O jogador ' + super.getNome() +
               ' número ' + super.getNumero() +
               ' possui ' + this.#jardasConquistadas +
               ' jardas conquistadas';
    }
}




class JogadorBasquete extends Jogador {

    #alturaSalto;
    #totalCestas;

    constructor(alturaSalto, totalCestas, nome, numero){
        super(nome, numero);
        this.#alturaSalto = alturaSalto;
        this.#totalCestas = totalCestas;
    }

    arremessar(){
        return 'O jogador ' + super.getNome() +
               ' número ' + super.getNumero() +
               ' arremessou a bola';
    }

    fazerEnterrada(){
        this.#totalCestas++;
        return 'Fez uma enterrada!';
    }

    mostrar(){
        return 'O jogador ' + super.getNome() +
               ' número ' + super.getNumero() +
               ' tem ' + this.#totalCestas +
               ' cestas e salta ' + this.#alturaSalto + 'm';
    }
}



const jogador1 = new JogadorFutebolAmericano('Corrida longa', 120, 'Carlos', 10);
console.log(jogador1.fazerTouchDown());
console.log(jogador1.mostrar());

const jogador2 = new JogadorBasquete(0.85, 30, 'Lucas', 23);
console.log(jogador2.arremessar());
console.log(jogador2.mostrar());