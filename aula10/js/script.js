let umaString='Um texto';// caso eu use uma \ e caractere de escape, para aparecer na mensagem a \ e necessario duas \\.

console.log(umaString.charAt(6));// pega o elemento na posição 6 da String
console.log(umaString.indexOf('texto'));// para saber em qual posição começa o valor no caso 'texto', caso haja mais de um valor igual pode colocar para procurar apartir de uma valor 'indexof('texto',10)', nesse caso procuraria apartir do indice 10.
console.log(umaString.lastIndexOf('t',4));// para procurar o valor de 'texto' de tras para frente apartir de um valor.
console.log(umaString.replace('texto', 'carro'));// altera o valor da string para o valor seguinte.
console.log(umaString.replace(/t/g,'#'));// altera todas as letras 't' para '#'.
console.log(umaString.length);//indica o tamanho da string.
console.log(umaString.slice(3,8));// recorta apenas a parte indicada da string.
console.log(umaString.toUpperCase);// deixa tudo em maiusculo.
console.log(umaString.toLowerCase);//deixa tudo em minusculo.