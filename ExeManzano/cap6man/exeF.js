const prompt=require('prompt-sync')();
let A=[], B=[], C=[];

for(let i=0;i<15;i++){
    B.push(prompt('Digite um numero para A: '));
    A.push(prompt('Digite um numero para B: '));
}
C.push(A, B);

console.log(`A matriz C é`);
console.log(C);