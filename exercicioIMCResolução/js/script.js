const form = document.getElementById('form');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const inputpeso = evento.target.querySelector('#peso');
    const inputaltura = evento.target.querySelector('#altura');
    
    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);
    
    if(!peso){
        setResultado('Peso Invalido',false);
        return;
    }

    if(!altura){
        setResultado('Peso invalido',false);
        return;
    }

    const imc = getImc(peso,altura);
    const nivel = getNivelImc(imc);
    
    const msg = `Seu Imc é ${imc} , ${nivel}.`;
    setResultado(msg,true);
});

function getNivelImc(imc){
    const indice = ['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return indice[5]
    if (imc >= 34.9) return indice[4];
    if(imc >=29.9) return indice[3];
    if(imc >= 24.9) return indice[2]
    if(imc >= 18.5) return indice[1];
    if(imc < 18) return indice[0];
}

function getImc(peso,altura){
    const imc = peso/ Math.pow(altura,2);
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado =  document.querySelector('#resultado');
    resultado.innerHTML = " ";
    const p = criaP();

    if(isValid)
    p.innerHTML = msg;
    resultado.appendChild(p);
}