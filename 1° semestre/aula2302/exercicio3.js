class Bicicleta{
    // atributos privados
    #modelo;
    #cor;
    #velocidadeMax;

    // setter modelo
    set modelo(valor){
        this.#modelo = valor;
    }

    // getter modelo
    get modelo(){
        return this.#modelo;
    }

    // setter cor
    set cor(valor){
        this.#cor = valor;
    }

    // getter cor
    get cor(){
        return this.#cor;
    }

    // setter velocidadeMax (com validação)
    set velocidadeMax(valor){
        if(valor <= 35){
            this.#velocidadeMax = valor;
        } else {
            console.log('Erro: a velocidade máxima não pode ser maior que 35 km/h');
        }
    }

    // getter velocidadeMax
    get velocidadeMax(){
        return this.#velocidadeMax;
    }

    // método para mostrar os dados
    mostrar(){
        console.log('Modelo: ' + this.#modelo);
        console.log('Cor: ' + this.#cor);
        console.log('Velocidade Máxima: ' + this.#velocidadeMax + ' km/h');
    }
}

// exemplo de uso
const minhaBike = new Bicicleta();

minhaBike.modelo = 'Mountain Bike';
minhaBike.cor = 'Preta';
minhaBike.velocidadeMax = 30; // permitido
minhaBike.velocidadeMax = 40; // não permitido

minhaBike.mostrar();