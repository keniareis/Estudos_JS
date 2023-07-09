const prompt = require('prompt-sync')();
let choice = parseInt(prompt('\tRock(1)\t   Paper(2)\tScissors(3)\t\nMake Your Choice:'));

//Condição de entrada para entrar inserir apenas numeros válidos
while (![1, 2, 3].includes(choice)) {
    console.log('Escolha Inválida!!! Digite uma opção válida');
    choice = parseInt(prompt('\tRock(1)\t   Paper(2)\tScissors(3)\t\nMake Your Choice:'));
}
//escolha da maquina: para sortear um numero aleatorio entre 'a' e 'b'
function numero(a, b){
    return Math.floor(Math.random()*(b - a + 1)) + a;
}
//atribuir o numero apenas de 1 a 3
let maquina = numero(1, 3);

//exibir a mensagem de escolha do usuario e da maquina atribuindo o nome aos numeros escolhidos
function escolha(choice, maquina) {
    let mensagem = '';
    
    if (choice==1) {
        mensagem += 'You chose ROCK\n'
    }else if (choice==2) {
        mensagem+='You chose PAPER\n'
    }else {
        mensagem+='You chose SCISSORS\n'
    }
    if (maquina==1) {
        mensagem+='Computer chose ROCK\n'
    }else if (maquina==2) {
        mensagem+='Computer chose PAPER\n'
    } else {
        mensagem+='Computer chose SCISSORS\n'
    }
    return mensagem;
}

console.log(escolha(choice, maquina));

//essa função determina o resultado do jogo
function Resultado(choice, maquina) {
    if (choice-maquina==0 || maquina-choice==0) {
        return 'DRAW! :|\n';//retorna empate se a diferença entre as escolha for 0
    }
    else if(choice>maquina){ 
        return (choice-maquina==1) ? 'YOU WIN! :D\n' : 'YOU LOSE! :(\n';//retornar vitória se a diferença for 1, senão retorna derrota
    }else{ 
        return (maquina-choice==1) ? 'YOU WIN! :D\n' : 'YOU LOSE! :(\n'//retornar vitória se a diferença for 1, senão retorna derrota
    }
}
console.log(Resultado(choice, maquina));