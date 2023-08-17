/* Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
jogador vai tentar descobrir qual foi o valor sorteado.*/

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

function valida(machine, userChoice) {
    while (!(userChoice<=5 && userChoice>=1)) {
        console.log ('\nEscolha INVÁLIDA!\n');
        userChoice = parseInt(prompt('Tente denovo: '));
    }
    determina(machine, userChoice);
}

let machine = sorteio(1, 5);
let userChoice = parseInt(prompt('\tA maquina escolheu um número de 1 a 5\nTente acertar qual: '));

valida(machine, userChoice);