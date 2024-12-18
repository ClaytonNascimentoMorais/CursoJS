/*
Operadores de comparação
> maior que
>= maior igual
<= menor igual
< menor que
== igualdade (Não recomendado)
=== igualdade (valor e tipo)
!= diferente (Não recomendado)
!== diferente estrito (valor e tipo)
*/
/* 
Operadores Lógicos
&& -> AND -> false && true (retorna o valor falso)
|| -> OR -> false || true (retorna o valor)
!  _. NOT

valores avaliados em falso FALSY VALUES
* False (esse e o unico que seu valor e realmente falso)
0
' ', " ", ` ` (aspas crases e aspas duplas vazias)
null \ undefined
NaN
*/

//console.log('Luiz' && 'Maria'); // nesse caso ambos valores são verdadeiros logo irá retornar o ultimo valor (não há curto-circuito)

//console.log('Luiz' && undefined && 'Maria'); // Nesse caso possuimos um curto circuito pois dois valores são verdadeiros e um falso, logo retorna o valor falso.

//console.log(0 || false || null || 'Luiz' || true); // Neste caso retorna o primeiro valor verdaderio pois a função '||' precisa de apena um verdadeiro para retornar verdadeiro.

console.log(10 > 5);