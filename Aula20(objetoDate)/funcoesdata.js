function ZeroAEsquerda(num){
    return num >= 10? num : `0${num}`
}

function formataData(data){
    const dia = ZeroAEsquerda(data.getDate());
    const Mes = ZeroAEsquerda(data.getMonth() +1 );
    const Ano = ZeroAEsquerda(data.getFullYear());
    return `${dia}/${Mes}/${Ano}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);