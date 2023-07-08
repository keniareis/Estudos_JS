const prompt=require('prompt-sync')();
let divisor, dividendo, i, n;

dividendo= parseInt(prompt('Digite o dividendo: '))
divisor= parseInt(prompt('Digite o divisor: '))

for(i=0;dividendo>=divisor; i++){
    dividendo-=divisor
}
console.log(`O dividendo cabe ${i} vezes no ${divisor}`)