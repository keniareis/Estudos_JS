let atual=0, anterior=1, proximo

for (let i = 0; i < 15; i++) {
    console.log(atual)

    proximo=anterior+atual
    anterior=atual
    atual= proximo
}
