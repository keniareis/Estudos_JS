const prompt = require('prompt-sync')();
let n, soma=0;

for (let i = 0; i< 15; i++) {
    let fat=1;
    n=parseInt(prompt('Digite um numero: '));
    for (let c = n; c >=1; c--) {
        fat*=c
    }
    soma+=fat
}
console.log(`o somatorio é ${soma}`)