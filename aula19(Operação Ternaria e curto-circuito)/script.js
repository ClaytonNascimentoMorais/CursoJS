/*
Opreadores logicos
&& -> and ou e
|| -> OR -> OU
! -> NOT -> NÃO
*/
// Operador ternario -> condição?expressão1:expressão2


//?:
const pontuação = 6000;
//Operação ternaria utilizada para simplificação de condicionais.
 const resul = pontuação >=1000?'Vip':'Não vip';


//Valores padrao para caso o usuario nao escolha um valor ja ter o padrao a ser utilizado.
const corUsuario = 0; 
const corPadrao = corUsuario || 'Preto';

console.log(resul);