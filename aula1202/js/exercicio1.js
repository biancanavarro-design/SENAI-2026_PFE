// =====================
// EXERCÍCIO 1
// Criar título usando JS
// =====================

const titulo = document.createElement('h1');
titulo.textContent = 'Eu amo praia';
document.body.appendChild(titulo);


// =====================
// EXERCÍCIO 2
// Criar div 94% centralizada
// =====================

const novaDiv = document.createElement('div');
document.body.appendChild(novaDiv);

novaDiv.style.width = '94%';
novaDiv.style.margin = '0 auto';
novaDiv.style.height = '200px';
novaDiv.style.backgroundColor = '#d7a532';
novaDiv.style.textAlign = 'center';
novaDiv.style.paddingTop = '20px';


// =====================
// EXERCÍCIO 3
// Adicionar <h2> com nome da UC
// =====================

// Usando innerHTML
novaDiv.innerHTML = '<h2>Unidade Curricular - Desenvolvimento Web</h2>';

// Usando innerText
const tituloUC = document.createElement('h2');
tituloUC.innerText = 'Unidade Curricular - Desenvolvimento Web';
novaDiv.appendChild(tituloUC);


// =====================
// EXERCÍCIO 4
// Adicionar imagem na segunda div
// =====================

const divImagem = document.querySelector('#divImagem');

divImagem.style.width = '94%';
divImagem.style.margin = '20px auto';
divImagem.style.textAlign = 'center';

divImagem.innerHTML = `
    <img src="https://img.freepik.com/fotos-gratis/bela-foto-do-por-do-sol-colorido-na-praia_181624-27368.jpg?semt=ais_hybrid&w=740&q=80"
         alt="Imagem exemplo"
         style="width:300px; border-radius:10px;">
`;
