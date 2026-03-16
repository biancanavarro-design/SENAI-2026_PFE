class Livro{
    //atributos
    titulo = 'Por Lugares Incríveis';
    autor = 'Jennifer Niven';
    ano = 2015;
    genero = 'Romance';
    paginas = 355;
    editora = 'Seguinte';
    preco = 41.43;
    idioma = 'Português';

    //metodos
    abrir(){
        console.log('O livro está sendo aberto!');
    }

    mostrar(){
        console.log('O livro é: ' 
        + this.titulo + '; ' 
        + this.autor + '; ' 
        + this.ano + '; ' 
        + this.genero + '; ' 
        + this.paginas + ' páginas; ' 
        + this.editora + '; ' 
        + 'R$' + this.preco + '; ' 
        + this.idioma + '.');
    }
}

const meuLivro = new Livro();
meuLivro.abrir();
meuLivro.mostrar();