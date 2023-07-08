const prompt=require('prompt-sync')();
let a=[], b=[]

for(let i=0;i<6;i++){
    a[i]=parseFloat(prompt(`Digite o ${i+1}° numero:`))
    if (i%2!=0) {
        b[i-1]=a[i]
    }else{
        b[i+1]=a[i]
    }
}
console.log(a)  
console.log(b)