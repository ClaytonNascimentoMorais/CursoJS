/* Valores que retornam "False" em JavaScript
Falsy
false (falso literal)
"" '' ``
null/undefined
0
NaN*/
// O curto circuito sempre retornara o valor responsavel por retornar 'False', caso não haja retornará o ultimo valor verdadeiro.
// Curto-cirtuico com '&&' -> false && true -> false = "Valor que fez retornar 'falso' "

//Exemplo de curto-circuito com &&
// console.log('Clayton' && true && 0 &&  'Maria');

//Curto-Circuito com '||' (|| -> true || false -> 'Vai retornar o  primeiro valor verdadeiro')
// Exemplo curto-circuito ||
// console.log(0 || false || null || 'Luiz'|| true)
const corUsuario = 'null';
const corPadrao = corUsuario|| 'red';

console.log(corUsuario || corPadrao);