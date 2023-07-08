const prompt=require('prompt-sync')();
let a=[], b=[], c=[];

for(let i=0;i<12;i++){
    let ka=prompt('Digite um numero divisivel por 2 ou 3:')
    if (ka%2==0 || ka%3==0) {
        a.push(ka)
    }
    else{
        console.log('NÚMERO INVÁLIDO!')
        i--
    }
}
for(let i=0;i<12;i++){
    let kb=prompt('Digite um numero que não é multiplo de 5:')
    if (kb%5!=0) {
        b.push(kb)
    }
    else{
    console.log('NÚMERO INVÁLIDO!')
        i--
    }
}
c.push(a, b)
console.log(c)
