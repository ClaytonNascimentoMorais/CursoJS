 function meuEscopo(){
    const form = document.querySelector('.form');
    const resul = document.querySelector('.resultado')
    const pessoa = [];
    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        

        resul.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
        `Peso: ${peso.value} Altura:  ${altura.value} </p>`;
    }

    form.addEventListener('submit',recebeEventoForm);
   
}
meuEscopo();