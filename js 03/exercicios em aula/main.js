//Arrays unidimensionais
// Podemos criar array assim
const num1 = new Array(30, -1, 5, 3, 121);
//ou podemos fazer
const num2 = [-2, 40, 16, 111, 33, 64];

console.log(num1);
console.log(num2);

//Acessando elementos diversos dos arrays
console.log(`primeiro elemento de num1: ${num1 [0]}`);
console.log(`primeiro elemento de num2: ${num2 [0]}`);

console.log(`terceiro elemento de num1: ${num1 [3]}`);
console.log(`quinto elemento de num2: ${num2 [5]}`);

//Arrays bidimensionais
console.clear();
const matrix = [
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'Uva', -350],
];

// Acessando elementos diversos dos arrays
console.log(`Acessa a primeira linha: ${matrix[0]}`);
console.log(`Acessa o primeiro elemento: ${matrix[0][1]}`);


// Alterando um valor do array
console.clear();
let moedas = ['Real', 'Dólar', 'Coroa', 'Peso'];

console.log(`Antes: ${moedas}`);
moedas[2] = 'Yen';
console.log(`Depois: ${moedas}`);

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log('Antes:');
console.log(matrix1);

matrix1[0][2] = -10;
console.log('Depois:');
console.log(matrix1);

//Métodos em Arrays
console.clear();
let numArray = [1, 2, 3, 4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);


//iNSERIR E REMOVER ELEMENTO NO ARRAY

//POP()
const frutas1 = ['banana', 'laranja', 'maçã', 'kiwi'];
let x = frutas1.pop();  // x = 'kiwi' pois ele exclui o ultimo elemento

console.clear()

//PUSH
const legumes = ['cenoura', 'batata', 'rabanete', 'abobrinha'];
let y = legumes.push('Mandioquinha'); // y = 5 ele insere um elemento no final da array


// SHIFT()
console.clear();
const doce = ['bala', 'chocolate'];
let z = doce.shift();// z = 'bala', remove o elemento no início do array deslocando todos os elementos em uma posição e retorna esse elemento retirado:
console.log(doce);

console.clear();
const doce1 = ['bala', 'chocolate'];
let w = doce1.unshift('sorvete'); // w = 3, insere um elemento no início da array e retorna o tamanho do novo array
console.log(doce1);
/**Apagando um elemento em uma 
  em um posição específica
 */
 console.clear();
 const nomes = ['sarah', 'cauã', 'beatriz'];
 delete nomes[2];
console.log(nomes)