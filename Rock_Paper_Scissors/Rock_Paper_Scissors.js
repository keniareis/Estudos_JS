const prompt = require('prompt-sync')();
let maquina =[];

let choice = prompt('\tRock(1)\t   Paper(2)\tScissors(3)\t\nMake Your Choice:');

function numero(a, b){
    return Math.floor(Math.random()*(b - a + 1)) + a;
}
maquina = numero(1, 3);

function escolha(choice, maquina) {
    let mensagem = '';
    if (choice==1) {
        mensagem += 'You chose ROCK\n'
    }else{
        if (choice==2) {
            mensagem+='You chose PAPER\n'
        } else {
            mensagem+='You chose SCISSORS\n'
        }
    }
    if (maquina==1) {
        mensagem+='Computer chose ROCK\n'
    }else{
        if (maquina==2) {
            mensagem+='Computer chose PAPER\n'
        } else {
            mensagem+='Computer chose SCISSORS\n'
        }
    }
    return mensagem;
}

console.log(escolha(choice, maquina));

if (choice-maquina==0 || maquina-choice==0) {
    console.log('DRAW! :|\n');
}
else{
    if(choice>maquina){ 
        if (choice-maquina==1) {
            console.log('YOU WIN! :D\n');
        } else {(choice-maquina==2)
            console.log('YOU LOSE! :(\n');
        }
    }else{
        if (maquina-choice==1) {
            console.log('YOU LOSE! :(\n');
        } else {(maquina-choice==2)
            console.log('YOU WIN! :D\n');
        }
    }
}
