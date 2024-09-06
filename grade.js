function findWay(m, n){
    const ways = Array(m).fill().map(() => Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            ways[i][j] = ways[i-1][j] + ways[i][j-1];
        }
    }
    return  ways[m - 1][n - 1];
}

const m = 3;
const n = 7;
console.log(findWay(m, n)); 
