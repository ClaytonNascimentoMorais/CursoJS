const codigoClassificacao = 13;
let resp;

switch(codigoClassificacao){
    case 1:
        resp = 'Alimento não-perecivel'
    break;
    case 2: 
    case 3:
    case 4:
        resp =  'Alimento perecivel'
    break;
    case 5: case 6:
        resp = 'Vestuario'
    break;
    case 7:
        resp = 'Higiene Pessoal'
    break;
    case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15:
        resp = 'Limpeza e Utensilios domesticos'
    break;
    default:
        resp = 'Codigo Invalido'
}
console.log(resp)