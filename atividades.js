const atividades = [
    {
        nome: "ativade 01",
        inicio: 12,
        termino: 13,
    },
    {
        nome: "ativade 02",
        inicio: 12.5,
        termino: 15,
    },
    {
        nome: "ativade 03",
        inicio: 14,
        termino: 15,
    },
    {
        nome: "ativade 04",
        inicio: 9,
        termino: 13,
    },
    {
        nome: "ativade 05",
        inicio: 15,
        termino: 17,
    }
];

let result = 0;
for (let i = 0; i < atividades.length; i++) {
    if (atividades[i].termino <= atividades[i + 1].inicio) {
        console.log(atividades[i]);
    }
}

console.log(result); 
