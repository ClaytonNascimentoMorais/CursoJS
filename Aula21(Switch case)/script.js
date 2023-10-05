const data = new Date();
const diaDaSemana = data.getDay() ;
let dia = SemanaDay(diaDaSemana);


/*switch (diaDaSemana){
    case 0:
    dia = 'Domingo';
    break;
    case 1:
    dia = 'Segunda';
    break;
    case 2:
    dia = 'Terça';
    break;
    case 3:
    dia = 'Quarta';
    break;
    case 4:
    dia = 'Quinta';
    break;
    case 5:
    dia = 'Sexta';
    break;
    case 6:
    dia = 'Sabado';
    break;
    default:
        dia = 'Valor invalido'
}
console.log(dia);*/

function SemanaDay(diaDaSemana){
    let dia;
    switch (diaDaSemana){
        case 0:
        dia = 'Domingo';
        return dia;
        case 1:
        dia = 'Segunda';
        return dia;
        case 2:
        dia = 'Terça';
        return dia;
        case 3:
        dia = 'Quarta';
        return dia;
        case 4:
        dia = 'Quinta';
        return dia;
        case 5:
        dia = 'Sexta';
        return dia;
        case 6:
        dia = 'Sabado';
        return dia;
        default:
            dia = 'Valor invalido'
            return dia;
    }

}
console.log(dia);
console.log(diaDaSemana)