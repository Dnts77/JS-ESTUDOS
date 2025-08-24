//Aula 23 - Escopo de Variáveis
//Escopo de Variáveis = onde uma variável é reconhecida e acessível (local vs global)

//let x = 1; //Cada nome de variável deve ser único dentro do seu escopo, então, não é possível declarar outra variável x
           // É possível reutilizar nomes de variáveis se elas estiverem em escopos diferentes:
           

function function1(){
    let x = 1;
    console.log(x);
}


function function2(){
    let x = 2;
    console.log(x);
}

function2();
function1();
//Duas variáveis com o mesmo nome. Qualquer variável declarada dentro de uma função possui escopo local.
//Variáveis com escopo global são aquelas declaradas fora de uma função 