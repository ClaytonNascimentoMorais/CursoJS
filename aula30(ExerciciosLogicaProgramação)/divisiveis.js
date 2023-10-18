
function random(a,b){
    return Math.random()*(a-b) + b;
}

function numero(a){
    return Number.isNaN(a)?false:true;

}
let rand = random(0,100);

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

let valor = divisivel(rand);
console.log(valor);

