/*Vamos melhorar o jogo que fizemos. A partir de
agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
tentativas para tentar acertar.*/

const prompt = require('prompt-sync')();

function sorteio(a, b) {
    return Math.floor(Math.random()*(b - a + 1)) + a;
}

function determina(machine, userChoice) {
    if (machine == userChoice) {
        console.log(`\nVocê ACERTOU :D\n\nVocê escolheu ${userChoice}\nA maquina escolheu ${machine}`);
    } else {
        console.log(`\nVocê ERROU :(\n\nVocê escolheu ${userChoice}\nA maquina escolheu ${machine}`);
    }
}

function tentativas(machine, userChoice) {
    userChoice = parseInt(prompt('\nTente denovo: '));
    determina(machine, userChoice);
}

function valida(machine, userChoice) {
    while (!(userChoice<=10 && userChoice>=1)) {
        userChoice = parseInt(prompt('Tente denovo: '));
    }
    determina(machine, userChoice);
    let i = 1
    while(userChoice!==machine && i<=4){
        tentativas(machine, userChoice)
        i++;
    }
}

let machine = sorteio(1, 10);
let userChoice = parseInt(prompt('\tA maquina escolheu um número de 1 a 10\nTente acertar qual: '));

valida(machine, userChoice);