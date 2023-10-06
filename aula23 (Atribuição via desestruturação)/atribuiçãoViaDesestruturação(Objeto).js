const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: 18,
    endereco: {
        rua: 'Argentina',
        bairro: 'Pq das Americas',
        numero: 61
    }
}

//const {nome, ...a} = pessoa;
//console.log(nome,a); 

//const {endereco: {rua}} = pessoa
//console.log(rua);

const {idade: I} = pessoa;
console.log(I);