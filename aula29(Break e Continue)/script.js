const numeros = [1,2,3,4,5,6,7,8,9];

/*for(let numero of numeros){

    if(numero ===2 || numero === 5){
        console.log('Numero saltado')
        continue;
    }
    console.log(numero);

    if(numero === 7){
        console.log('Numero '+numero+ " encontrado");
        break;
    }
}*/

/*for(let numero in numeros){
    numero = numeros[numero];// Lembrando que For in nos da nao o valor e sim o local.
    if(numero ===2 || numero === 5){
        console.log('Numero saltado')
        continue;
    }
    console.log(numero);

    if(numero === 7){
        console.log('Numero '+numero+ " encontrado");
        break;
    }
}*/

/*for(let i =0; i<numeros.length;i++){
    numero = numeros[i];
    if(numero ===2 || numero === 5){
        console.log('Numero saltado')
        continue;
    }
    console.log(numero);

    if(numero === 7){
        console.log('Numero '+numero+ " encontrado");
        break;
    }
}*/
let i = 0;
/*while(i < numeros.length){
    let numero = numeros[i];
    if(numero ===2 || numero === 5){
        console.log('Numero saltado')
        i++;
        continue;
    }
    console.log(numero);

    if(numero === 7){
        console.log('Numero '+numero+ " encontrado");
        i++
        break;
    }  
    i++
}*/
do{
    let numero = numeros[i];
    if(numero ===2 || numero === 5){
        console.log('Numero saltado')
        i++;
        continue;
    }
    console.log(numero);

    if(numero === 7){
        console.log('Numero '+numero+ " encontrado");
        i++
        break;
    }
        i++
}while(i<numeros.length);