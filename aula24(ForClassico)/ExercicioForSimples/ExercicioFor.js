
const sla = [
    { tag: 'p', texto: 'Seja bem vindo!!!' },
    { tag: 'div', texto: 'Frase 1' },
    { tag: 'footer', texto: 'Frase 2' },
    { tag: 'section', texto: 'Frase 3' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i=0; i<sla.length;i++){
    let { tag, texto} = sla[i];
    let elemento = document.createElement(tag);
    elemento.innerHTML = texto;
    div.appendChild(elemento);
};

container.appendChild(div);

