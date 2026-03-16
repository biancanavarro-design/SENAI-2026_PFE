const corpo = document.querySelector('body')
const titulo = document.querySelector('.titulo')
const container = document.querySelector('#container')
const imagem = document.querySelector('#imagem')
const botao = document.querySelector ()

corpo.style.backgroundColor = '#9903cb';
corpo.style.color = 'white';
titulo.textContent = 'Adicionando elementos via JS'
container.style.width = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#d7a532'

let anuncio = '<h2>Curso dev com ia - novidade!!</h2>';
container.innerHTML += anuncio;

//adicionando atributos
imagem.setAttribute('src','https://img.freepik.com/fotos-gratis/bela-foto-do-por-do-sol-colorido-na-praia_181624-27368.jpg')
imagem.classList.add('imagem')

//eventos
let contador = 0;
botao.addEventListener('click', () =>{
    alert{'cliquei no botão' + contador++}
});