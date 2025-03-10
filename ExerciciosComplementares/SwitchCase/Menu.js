const codigo = 1030
const unidades = 10
let total
switch(codigo){
    case 100:
        total = 1.7 * unidades
    break;
    case 101:
        total = 2.3 * unidades
    break;
    case 102:
        total = 2.6 * unidades
    break;
    case 103:
        total = 2.4 * unidades
    break;
    case 104:
        total = 2.5 * unidades
    break;
    case 105:
        total = 1 * unidades 
    break;
    default:
        total = 'Codigo Invalido'
}
console.log(total)