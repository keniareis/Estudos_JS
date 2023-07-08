const prompt=require('prompt-sync')();
let A=[], B=[], i, num;

for(i=0;i<12;i++){
    num = prompt(`Digite o ${i+1}° numero: `)
    if (num%2!=0){
        num*=2
    }
    A.push(num)
}
B.push(A)
console.log(B)