class Carro{
    //atributos
    modelo = 'Caminhonete';
    msrca = 'Chevrolet';
    ano =2025;
    preco = 2000000;

    //metodos
     mover(){
        console.log('Estou me movendo!');
    }
    mostrar(){
        console.log('O carro é: ' + this.modelo + '' + this.marca + '' + this.ano + '' + this.preco);
    }
}

const caminhonete  = new Carro();
caminhonete.mover();
caminhonete.mostrar();