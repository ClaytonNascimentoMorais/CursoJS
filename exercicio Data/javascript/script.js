let data = new Date();
const hoje = DiaDaSemana(data.getDay());
const mes =  Mes(data.getMonth());
const res = document.getElementById('texto');
function DiaDaSemana(diasemana) {
    let dia;
    switch (diasemana) {
        case 0:
            dia = 'Domingo'
            return dia;
        case 1:
            dia = 'Segunda-feira'
            return dia;
        case 2:
            dia = 'Terça-feira'
            return dia;
        case 3:
            dia = 'Quarta-feira'
            return dia;
        case 4:
            dia = 'Quinta-feira'
            return dia;
        case 5:
            dia = 'Sexta-feira'
            return dia;
        case 6:
            dia = 'Sabádo'
            return dia;
        default:
            return 'Dia invalido'
    }
}

function zeroaEsquerda(num){
    return num >= 10? num: `0${num}`;
}

function Mes(mes) {
    let mesAtual;
    switch (mes) {
        case 0:
            mesAtual = 'Janeiro'
            return mesAtual;
        case 1:
            mesAtual = 'Fevereiro'
            return mesAtual;
        case 2:
            mesAtual = 'Março'
            return mesAtual;
        case 3:
            mesAtual = 'Abril'
            return mesAtual;
        case 4:
            mesAtual = 'Maio'
            return mesAtual;
        case 5:
            mesAtual = 'Junho'
            return mesAtual;
        case 6:
            mesAtual = 'Julho'
            return mesAtual;
        case 7:
            mesAtual = 'Agosto'
            return mesAtual;
        case 8:
            mesAtual = 'Setembro'
            return mesAtual;
        case 9:
            mesAtual = 'Outubro'
            return mesAtual;
        case 10:
            mesAtual = 'Novembro'
            return mesAtual;
        case 11:
            mesAtual = 'Dezembro'
            return mesAtual
        default:
            return 'Dia invalido'
    }
}

    res.innerHTML =`${hoje}, ${data.getDay()+1} de ${mes} de ${data.getFullYear()} <br> ${data.getHours()}:${zeroaEsquerda(data.getMinutes())}`;


