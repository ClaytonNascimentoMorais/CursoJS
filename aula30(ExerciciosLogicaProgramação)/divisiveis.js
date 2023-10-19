let random = (a,b)=> Math.random()*(a-b) + b;
let numero = a => Number.isNaN(a)?'Nao e um numero':'É um numero';
let rand = random(0,100);
let valor = divisivel(Math.floor(rand));

function divisivel(a){
    if(a%3==0 && a%5==0){
        return 'FrizzBuzz'
    }else if(a%3==0){
        return 'Frizz'
    }else if(a%5==0){
        return 'Buzz';
    } 
    return a;
}

console.log(numero(Math.floor(rand)));
console.log(valor);

