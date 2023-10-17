const paragrafo = document.querySelector('.Paragrafos');

const ps = paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGround = estilosBody.backgroundColor;



for(let p of ps){
    p.style.backgroundColor = backGround
    p.style.color = 'white'
    p.style.textAlign = 'center'
    p.style.border = '2px solid black'
    p.style.boxShadow = '3px 5px gray'
    p.style.borderRadius = '15px'
}