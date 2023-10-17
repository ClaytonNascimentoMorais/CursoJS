const Frutas = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Clayton',
    idade: 23,
    sobrenome: 'Nascimento'
}

/*for(let i =0; i< Frutas.length;i++){
    console.log(Frutas[i]);
}*/

//const chave = 'idade';
//console.log(pessoa[chave]);

for(let i in pessoa){
    console.log(pessoa['nome']);
}