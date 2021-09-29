// O escopo é o local no qual conseguimos acessar a variável no algoritmo
// -também podem ser em uma função, quando trabalhamos com escopo de função
// Escopo global: a variável é acessível em todo o código
// Escopo local: a variável é acessível em apenas determinado local do código

//Variaveis do tipo global
var myVariable = 'global';
myOtherVariable = 'global';

// funcao
function myFunction() {
    // aqui dentro funciona o escopo de função

    //variavel do tipo local
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    // aqui dentro funciona o escopo de função
    // ao contrario do exemplo acima, nao utiliza a palavra var para a declaração da variavel
    // assim, a variavel utilizada na funcao é a variavel global declarada no codigo
    // deste modo, a variavel recebe o novo valor de local
    myOtherVariable = 'local';
    return myOtherVariable;
}

// imprime a variavel global declarada no inicio do codigo
console.log(myVariable);
// imprime a variavel local retornada na função
console.log(myFunction());
// imprime a variavel global com o novo valor retornada na função
console.log(myOtherFunction());
// imprime a variavel global com o valor modificado após a execucao da função
console.log(myOtherVariable);

// A qualidade de código em JS é avaliada de acordo com o numero de variáveis e funções globais
// Como boa prática, é melhor evitar as váriavéis globais.