function fibonacciRecursivo(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

function pertenceFibonacci(num, i = 0) {
    const fibNum = fibonacciRecursivo(i);

    if (fibNum === num) return `O número ${num} pertence à sequência de Fibonacci.`;
    if (fibNum > num) return `O número ${num} NÃO pertence à sequência de Fibonacci.`;

    return pertenceFibonacci(num, i + 1);
}

const numero = 13; // Substitua pelo número que deseja testar
console.log(pertenceFibonacci(numero));
