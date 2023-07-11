/*Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados. */
const prompt = require('prompt-sync')();

const largura = parseFloat(prompt('Largura: '));
const altura = parseFloat(prompt('Altura: '));

let area = largura * altura;
let tinta = area/2;

console.log(`A área a ser pintada é ${area} m, e a quantidade de tinta são ${tinta} litros`);