/*
Dada uma lista de itens, cada um com um peso e um valor, 
determine o valor máximo que pode ser obtido colocando itens na mochila sem exceder a capacidade.
*/

function knapsack =(weight, values, capacity, n, memo = {}) {
    if(n == 0 || capacity == 0) return 0;

    let key = `${n}-${capacity}`;
    if(key in memo) return memo[key];
    

}

let weight = [1, 2, 3, 4];
let values = [10, 20, 30, 40];
let capacity = 5;
let n = weight.length;
console.log(knapsack(weight, values, capacity, n));
