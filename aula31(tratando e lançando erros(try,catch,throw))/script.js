function soma(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw TypeError ('a e b, precisam ser valores numericos')
    }
    return a+b;
}

try{
    console.log(soma(a,b));
}catch(error){
    console.log('Valores invalidos');
}