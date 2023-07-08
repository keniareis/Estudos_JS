const prompt=require('prompt-sync')();
let nome=[], i,n

for(i=0;i<10;i++){
    n = prompt(`Digite o ${i+1}° nome: `)
    nome.push(n)
}
console.log(nome)
