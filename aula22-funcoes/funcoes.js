//Aula 22 - Funções
// Funções = uma seção de código reutilizável. Uma vez declarada, pode ser usada quando quiser, chamando-a para executar tal código.
//Podemos usar variáveis em funções
//Os dados enviados à uma função são chamados de Argumentos, porém, é necessário um par de parâmetros combinados, que são colocados dentro dos () da declaração da função
    //Assim declaramos variáveis temporárias.


function happyBirthday(username, age){ //É assim que a função é declarada: "function", seguido de um nome único, seguido de (){}
    console.log("Happy birthday to u");
    console.log("Happy birthday to u");
    console.log(`Happy birthday dear ${username}`);
    console.log("Happy birthday to u");
    console.log(`You are ${age} years old`);
}
//É assim que a função é chamada 
happyBirthday("Daniel", 18); 
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 37);
////////////////////////////

//Segundo Exemplo - Return

function add(x, y){
    let result = x + y;
    return result; //return é usado para retornar o parâmetro desejado ao final da execução da função
}
let answer = add(2, 3); //A variável "answer" está guardando o chamado da função
console.log(answer); //Mostrar "answer" na tela

//Exemplo com subtração
function subtract(x, y){
    return x - y;
}
console.log(subtract(10, 4));

//Exemplo com multiplicação
function multiply(x, y){
    return x * y;
}
console.log(multiply(4, 4));

//Exemplo com divisão
function divide(x, y){
    return x / y;
}
console.log(divide(20, 2));

//Exemplo que checa se o número é par ou ímpar
function isEven(number){
    if(number % 2 === 0){ //se o número dividido por 2 sobrar estritamente 0, o retorno é verdadeiro
        return true;
    }
    else{
        return false; //se não sobrar 0, é falso
    }
}
console.log(isEven(18));

//Exemplo que checa se um email é válido
function isValidEmail(email){
    if(email.includes("@")){ //O método "includes" é nativo do JS e checa se algo está incluso em determinado lugar, no caso, o @ 
        return true;
    }
    else{
        return false;
    }
}
console.log(isValidEmail("cabeca@gmail.com"));//