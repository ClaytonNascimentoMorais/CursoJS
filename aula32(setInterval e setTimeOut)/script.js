function mostraHora(){
    let data = new Date();
    return  data.toLocaleTimeString('pt-Br',{hour12:false});
}



let Time = setInterval(function(){
    console.log(mostraHora());
}, 1000);


setTimeout(function(){
    clearInterval(Time);
}, 5000)