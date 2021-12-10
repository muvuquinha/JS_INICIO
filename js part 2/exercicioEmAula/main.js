// // Funções (simples)
// // const num3 = 3;

// function addNums (num1 = 2, num2 = 3){
//     return num1 + num2;
// }

// console.log(addNums ());

// let x = addNums(50, 8);

// function valida(num){
//     if (num > 25){
//         return "é maior";
//     }
//      else{
//        return "é menor";
//     }  
    
// }

// console.log(valida(5));

// faz a chama da funcion e depois cria a mesma 
let z = myFunc (22, 5);
console.log(z);

function myFunc(num1, num2){

    return num1 * num2
};


// Arrow function
const hello = () =>{
    return "olá mundo";
};

console.log(hello ());

//

const addNums = (num1 = 5, num2 = 6) =>{
    return num2 * num1
};

console.log(addNums())

////

console.clear();

// Função boasVindas() carregando evento onload > (função simples)

function bemVindas(){
    alert("Bem vindo a nossa página");

    console.log("Bem vindo a nossa página");
}

// Função eventClique() carregando evento onclick 
//(Arrow Function)
const eventClique = () => {
    alert("Você clicou em um botão");
    console.log(eventClique());
}

const mouseEmCima = () =>{

    console.log("Mouse está em cima do titulo")
}