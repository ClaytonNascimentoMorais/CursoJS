function random(min,max){
    const r = Math.random() * (max - min)+ min;
    return Math.floor(r);
}

let rand = random(1,15);
//console.log(rand);

/*while(rand !== 10){
    rand = random(1, 15);
    console.log(rand);
}*/

do{
    rand = random(1,15);
    console.log(rand);
}while(rand !== 10);