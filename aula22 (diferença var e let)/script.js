const verdadeira = true;

// Let tem escopo de bloco {...bloco}
// dentro de bloco cada vez que você inicia uma let ela esta sendo recriada.
//caso mande aparecer aquela variavel dentro de um console.log() e nao haja naquele bloco, a engine ira procurar no bloco maior e assim sucessivamente ate o bloco global.


// Var só tem escopo de função
// cada vez que você inicia uma var oque acontece e ela ser redeclarada 



/*let nome = 'Luiz'; // let não pode ser sobreescrito. 
var nome2 = 'Luiz'; // Redeclarado

if(verdadeira){
    let nome = 'Otavio' // criando nova let
    var nome2 = 'Rogerio' // Redeclarado
    if(verdadeira){
        let nome = 'Outra coisa'; // criando nova let
        var nome2 = "Ronaldo" // Redeclarado
    }
    console.log(nome,nome2);//Nesse caso    o valor de let sera 'Luiz' pois o console.log()esta no escopo global e o de var será Ronaldo pois cada chamada ela teve seu valor alterado

    let so funciona detro do bloco
    var funciona fora do bloco menos no caso desse bloco ser uma function

    let avisa caso você queira utiliza-la antes da declaração, já o var não avisa e só da como valor undefined
}*/

