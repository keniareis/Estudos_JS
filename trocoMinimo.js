
function calcularTroco(preco) {
    const moedas = [100, 50, 25, 10, 5, 1];
    let troco = 0;

    for (let i = 0; troco <= preco; i++){
        if (troco <= preco) {
            preco -= moedas[i];
            troco++;
        }
    }
    return troco;
}

console.log(calcularTroco(150)); 


