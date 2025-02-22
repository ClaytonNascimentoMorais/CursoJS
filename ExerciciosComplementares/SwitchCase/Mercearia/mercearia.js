function Recepcao(){
 let codigo = Number(document.getElementById('valor').value)
 let res = document.getElementById('resp')
 let valor =0
 let total = 0
 switch(codigo){
    case 100:
        valor +=  1.59
    break;
    case 101:
        valor += 4.59
    break;
    case 102:
        valor += 1.79
    break
 }
 total = valor + total
 res.innerHTML = `Valor à pagar: R$${total.toFixed(2)}`

}