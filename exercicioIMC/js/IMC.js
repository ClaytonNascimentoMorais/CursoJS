function Calcular(){
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);
    let imc = peso/ (altura*altura);
    let result = document.getElementById('resultado');
    result.innerHTML = ` `;
    result.innerHTML = ` Seu IMC`
    if(peso > 300 || altura > 2.4 || altura < 0.5){
        result.innerHTML += " Invalido"
    } else if(imc > 0 && imc < 18.5){
        result.innerHTML += ` ${imc.toFixed(2)}, Abaixo do peso`
    } else if(imc >= 18.5 && imc < 25){
        result.innerHTML += `${imc.toFixed(2)}, Peso Normal`
    }else if(imc >= 25 && imc < 29.9){
        result.innerHTML += `${imc.toFixed(2)}, Sobrepeso`
    }else if(imc >= 29.9 && imc < 34.9){
        result.innerHTML += `${imc.toFixed(2)}, Obsedidade grau 1`
    }else if(imc >= 34.9 && imc < 39.9){
        result.innerHTML += `${imc.toFixed(2)}, Obesidade grau 2`
    }else {
        result.innerHTML += `${imc.toFixed(2)}, Obesidade grau 3`
    } 
    
}