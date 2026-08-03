// Seleciona o body
const corpo = document.querySelector('body');

// Cria a div
const novaDiv = document.createElement('div');

// Adiciona a div no body
corpo.appendChild(novaDiv);

// Estiliza a div
novaDiv.style.width = '94%';
novaDiv.style.margin = '0 auto';
novaDiv.style.height = '200px';
novaDiv.style.backgroundColor = '#d7a532';
novaDiv.style.textAlign = 'center';
novaDiv.style.paddingTop = '20px';


// 🔥 Parte do exercício 3

// 1️⃣ Usando innerHTML
novaDiv.innerHTML = '<h2>Programação e FrontEnd</h2>';

// 2️⃣ Usando innerText
const tituloUC = document.createElement('h2');
tituloUC.innerText = 'Programação e FrontEnd';

novaDiv.appendChild(tituloUC);
