//?:
const pontuação = 600;
//Operação ternaria utilizada para simplificação de condicionais.
 const resul = pontuação >=500?'Vip':'Não vip';


//Valores padrao para caso o usuario nao escolha um valor ja ter o padrao a ser utilizado.
const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Preto';

console.log(resul,corPadrao);