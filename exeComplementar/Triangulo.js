/*Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é 
possível formar um triângulo com essas retas e mostrar que tipo de triângulo será formado.
 Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois. */
const prompt = require('prompt-sync')();

function possivel(reta1, reta2, reta3) {
    if((reta1 + reta2)>=reta3 && (reta1 + reta3)>=reta2 && (reta2 + reta3)>=reta1){
        console.log('é possível formar um trigangulo')
    }else{
        console.log('NÃO é possivel formar um triangulo')
    }
}

function derteminar(reta1, reta2, reta3) {
    if(reta1 == reta2 && reta2 == reta3){
        console.log('Um traingulo EQUILATERO')
    }else if (reta1 == reta2 || reta1 == reta3 || reta2 == reta3) {
        console.log('Um triangulo ISÓCELES')
    }else {
        console.log('Um triangulo ESCALENO')
    }
}


let reta1 = parseFloat(prompt(`Digite o tamanho da 1° reta: `))
let reta2 = parseFloat(prompt(`Digite o tamanho da 2° reta: `))
let reta3 = parseFloat(prompt(`Digite o tamanho da 3° reta: `))

possivel(reta1, reta2, reta3);
derteminar(reta1, reta2, reta3);