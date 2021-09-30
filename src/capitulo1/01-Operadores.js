// Em qualquer linguagem de programacao precisamos de operadores para realizar operações
// JS tem operadores aritmeticos, de atribuicao, de comparacao, logicos, bit a bit, unario, etc.

var num = 0; // operador de atribuicao
//OPERADORES ARITMETICOS
num = num + 2; //operador aritmetico de soma e atribuicao ao proprio numero
num = num * 3; //operador aritmetico de multiplicacao e atribuicao ao proprio numero
num = num / 2; //operador aritmetico de divisao e atribuicao ao proprio numero

num++; //soma 1 ao proprio numero
num--; //subtrai 1 ao proprio numero

//OPERADORES DE ATRIBUICAO
num+=1; // forma contraida operador aritmetico de soma e atribuicao ao proprio numero
num-=2; // forma contraida operador aritmetico de subtracao e atribuicao ao proprio numero
num*=3; // forma contraida operador aritmetico de multiplicacao e atribuicao ao proprio numero
num/=2; // forma contraida operador aritmetico de divisao e atribuicao ao proprio numero
num%=3; // forma contraida operador aritmetico de modulo e atribuicao ao proprio numero

//OPERADORES DE COMPARACAO
console.log('num == 1: '+(num==1)); //exibe a mensagem da string entre aspas e compara se o numero é igual 1
console.log('num == 1: '+(num===1)); //exibe a mensagem da string entre aspas e compara se o numero é igual 1, em valor e tipo de objeto
console.log('num == 1: '+(num!=1)); //exibe a mensagem da string entre aspas e compara se o numero é diferente de 1
console.log('num == 1: '+(num>1)); //exibe a mensagem da string entre aspas e compara se o numero é maior que 1
console.log('num == 1: '+(num<1)); //exibe a mensagem da string entre aspas e compara se o numero é menor que 1
console.log('num == 1: '+(num>=1)); //exibe a mensagem da string entre aspas e compara se o numero é maior ou igual 1
console.log('num == 1: '+(num<=1)); //exibe a mensagem da string entre aspas e compara se o numero é menor ou igual 1

//OPERADORES LOGICOS
//exibe a mensagem da string entre aspas e compara logicamente os boleanos, operador AND(e) ambos os valores devem ser true
console.log('true && false: '+( true && false));
//exibe a mensagem da string entre aspas e compara logicamente os boleanos, operador OR(ou) ao menos um valor deve ser true
console.log('true || false: '+( true || false));
//exibe a mensagem da string entre aspas e nega logicamente o boleano
console.log('!true: '+!true);

//OPERADORES BIT A BIT - bitwise
console.log('5 & 1: ',(5&1)); // operador bit a bit E
console.log('5 | 1: ',(5|1)); // operador bit a bit OU
console.log('~ 5: ',(~5)); // operador bit a bit NEGACAO
console.log('5 ^ 1: ', (5^1)); // operador bit a bit OU EXCLUSIVO
console.log('5 << 1: ', (5<<1)); // operador bit a bit DESLOCAMENTO PARA A ESQUERDA
console.log('5 >> 1: ', (5>>1)); // operador bit a bit DESLOCAMENTO PARA A DIREITA

// TIPOS DE DADOS
// TIPOS PRIMITIVOS: null, undefined, string, number, boolean e symbol
// TIPOS DERIVADOS: objetos JavaScript, incluindo funcoes, arrays e expressoes regulares 
// utiliza a palavra reservada typeof para retornar o tipo de dado manipulado
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:Jhon} :', typeof {name:Jhon});

var myObj = {name:'Jhon',age:21};
delete myObj.age; // palavra reservada utilizada para apagar uma propriedade de um objeto
console.log(myObj);
