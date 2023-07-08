let i, fat, n    

for (i = 1; i<= 10; i++) {
    if (i%2!=0) {
        fat = 1
        for (n = i; n >= 1 ; n--) {
            fat*=n            
        }
        console.log(`as fatoriais sao: ${fat}`)
    }
}
