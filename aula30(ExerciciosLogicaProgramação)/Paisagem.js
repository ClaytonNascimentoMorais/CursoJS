function ePaisagem(largura,altura){
    return largura>altura? true: false;
}
const paisagem = (largura,altura) => largura>altura;
console.log(paisagem(100,25));