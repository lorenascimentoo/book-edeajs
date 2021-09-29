alert('Hello, World!');

//TIPOS DE VARIÁVEIS EM JAVASCRIPT
// number(numeros), string, boolean(booleano)
// function(funcao), object(objeto)
// undefined(indefinido), nullo
// arrays, datas e expressoes regulares

// Linguagem fracamente tipada.
// basta utilizar a palavra reservada **var** para declaracao da variavel
// apesar de nao ser obrigatorio, especifica-la na hora de declarar é uma boa pratica

var num = 1;
var price = 1.5;
var myName = 'Packt';
var trueValue = true;
var nullVar = null;
var und;

// o JS não é fortemente tipada, ou seja, na declaracao da variavel nao e obrigatorio que informe o tipo da variavel
// além disso pode-se declarar um variavel e inicializa-la com um numero, depois essa mesma variavel pode receber uma string
// todas as variaveis declaradas acima sao validas

console.log('num: '+num); // concatena o resultado em uma unica string
//console.log('num: ',num); adiciona a descricao e visualiza o conteudo da variavel
console.log('myName: '+myName);
console.log('trueValue: '+trueValue);
console.log('price: '+price);
console.log('nullVar: '+nullVar);
console.log('und: '+und);