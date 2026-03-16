class Pessoa{
    nome; //atrib. público
    #cpf = '52540801838'; // atrib privado

    //mtodos getter e setter (públicos)
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
}

const estudante = new Pessoa();
estudante.nome = 'Lívia';
estudante.setCpf(52540801838);
console.log('O cpf é ' + estudante.getCpf());
console.log(estudante.nome);