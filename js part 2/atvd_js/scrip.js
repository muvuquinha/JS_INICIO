// Crie uma função que calcule a média de 4 notas e exibe o resultado no console.log
function mediaTotal(num1 = 5, num2 = 8){
    let media = 2;

    return (num1 + num2) / media;
    
    
}

console.log(mediaTotal());

//Crie uma função que faça a conversão de Celsius para Fahrenheit e exiba o resultado no console.log 

const celsius =(cel = 23) =>{
    return cel * 9/5 + 32;

    
}

console.log(celsius());

/// ============



//Alerta do botão
console.clear();
function alertCookie()
{
    alert('Você quer um cookie')
    console.log('Você quer um cookie')
};

//Alerta sucesso
console.clear();
const alertSucesso = () => 
{
    alert('Mensagem gerada com sucesso');
    console.log('Mensagem gerada com sucesso');
};

//Adicionando objeto Notebook
console.clear();
const notebook =
{
    Tipo: "Dell",
    Modelo: "Inspiron 15 3000",
    Ano:"2021",
    Cor:"Prata",
    Memoria:"8GB"
};
console.log(notebook);

//Calculo da conversão de anos para dias
console.clear();
function convertDias(an= 10, di = 365 )
{
    return an * di;
};
console.log (convertDias())
