class Caneta{
    cor ='Amarelo';
    marca = 'Faber Castel';
    ponta = 'Fina';
    qtdTinta = 5;
    tampa = false;

    //método têm parenteses
    escrever(){
        return 'Começou a escrever';
    }

    sublinhar (valor){
        this.qtdTinta -= valor;
        return 'Quantidade restante de tinta ' + this.qtdTinta;
    }
    //alterar o metodo sublinhar p nao permitir subtrair a quantd de tinta se o valor for maior q a quantid
}
const  canetaFina = new Caneta();
console.log (canetaFina.escrever());
console.log (canetaFina.sublinhar(2));