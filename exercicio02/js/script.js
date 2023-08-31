let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let a = varA;

varA = varB;
varB = varC;
varC = a;

console.log(varA,varB,varC)