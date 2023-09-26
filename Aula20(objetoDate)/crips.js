//http://developer.mozilla.org/pt-br/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60* 60 * 24 * 1000;
// const data = new Date(0+ tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix (marco zero)
// const data = new Date(2019,3); // a,m,d h,M,s,ms
//const data = new Date('2019-04-20 20:20:59');
//console.log('Dia', data.getDate());
//console.log('Mes', data.getMonth()); // janeiro = 0 e Dezembro = 11
//console.log('Hora', data.getHours());
//console.log('Minuto', data.getMinutes());
//console.log('Seg', data.getSeconds());
//console.log('miliSeg', data.getMilliseconds());
//console.log('diaSemana', data.getDay()); // Domingo = 0, Sabado = 6

//console.log(Date.now()); // Esse valor sera dado em milisegundos desde o marco zero 
// logo para saber o dia coloca esse numero entre new Date(1695737734670)
const Brasilia = 60*60*3*1000; // Essa variavel serve para deixar a data no horario de Brasilia, pois o valor dato e sempre com tres horas a mais que o nosso horario.
const data = new Date(1695737993257 - Brasilia);

console.log(data.toString());