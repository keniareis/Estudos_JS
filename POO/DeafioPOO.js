/*1. Crie uma classe chamada `Pessoa` que tenha dois campos, `nome` e `idade`.
2. Crie alguns métodos para pegar e definir o nome e a idade da pessoa.
3. Crie duas instâncias da classe `Pessoa`, `pessoa1` e `pessoa2`.
4. Use as instâncias para definir os nomes e as idades das pessoas e, em seguida, imprima os nomes e as idades das pessoas na tela.
5. Adicione um método chamado `falar` que imprima o nome da pessoa.
6. Adicione um método chamado `fazerAniversario` que incrementa a idade da pessoa e imprime uma mensagem de aniversário.
7. Use as instâncias para definir os nomes e as idades das pessoas,
falar, fazer aniversário e imprimir os nomes e as idades das pessoas na
tela.*/

const prompt = require('prompt-sync')();

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    get falar(){
        return this.nome;
    }

    get felizAniversario(){
        this.idade++;
            return `Happy birthday, you're ${this.idade} now!`;
    }
}

const humanos = [];
let continuar

do {
    
    let PersonName = prompt("Digite o nome da pessoa: ");
    let PersonAge = prompt("Digite a Idade: ");
    let PersonNew = new Pessoa (PersonName, PersonAge);

    humanos.push(PersonNew);

    continuar = parseInt(prompt("Deseja adicionar outra pessoa? [1]Sim  [2]Não"))

} while (continuar === 1);

humanos.forEach((Pessoa) => {

    console.log(`${Pessoa.falar} ${Pessoa.felizAniversario}`)

});