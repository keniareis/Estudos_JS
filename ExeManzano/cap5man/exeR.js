const prompt=require('prompt-sync')();
let maior=0, menor=0, n=0, i

while(n>=0) {
    n=parseInt(prompt('Digite um numero positivo:'))    
    console.log('para sair digite um negativo')
    if (n>=0) {
        menor=n
        if (menor>maior) {
            maior=menor
        }
    }
}
console.log(`O maior é ${maior} e o menor é ${menor}`)