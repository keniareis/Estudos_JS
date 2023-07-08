const prompt=require('prompt-sync')();
let a=[], b=[], c=[]
let i, ka, kb

for(i=0;i<10;i++){
    ka=prompt(`Digite o ${i+1} numero divisivel por 2 e 3:`)
    if (ka%2==0 && ka%3==0) {
        a.push(ka)
    }
    else{
        console.log('NÚMERO INVÁLIDO!')
        i--;
    }
}
for(i=0;i<10;i++){
    kb=prompt('Digite um numero multiplo de 5:')
    if (kb%5==0) {
        b.push(kb)
    }
    else{
        console.log('NÚMERO INVÁLIDO!')
        i--;
    }
}
c.push(a, b)
console.log(c)
