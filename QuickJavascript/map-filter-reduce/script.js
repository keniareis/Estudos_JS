const precos = [
    "Creditos",
    "R$ 200",
    "R$ 400",
    "Contas a pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

const precosFiltro = precos.filter(preco => preco.includes("R$"));  

const precoNumero = precosFiltro.map(preco => Number(preco.replace("R$ ", "")));

const total = precoNumero.reduce((acc, item) => acc + item);

console.log(precosFiltro);
console.log(precoNumero);
console.log(total);

