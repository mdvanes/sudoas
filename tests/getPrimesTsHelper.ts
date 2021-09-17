// GetPrimes implemented with only TS, without WebAssembly

const isPrime = (nr: number): number => {
    if (nr < 2) { return 0; }
    for (let i = 2; i < nr; i++) { if (nr % i === 0) { return 0; } } return 1;
};

export function getPrimesTs(amount: number): Int32Array {
    if (amount > Math.pow(10, 8)) {
        throw new Error("Input too high");
    }
    let primes = new Int32Array(amount);
    for (let i = 1; i < amount; i++) {
        primes[i] = isPrime(i) ? i : 0;
    }
    let amountX = 0;
    for (let i = 0; i < primes.length; i++) {
        if (primes[i] !== 0) {
            amountX += 1;
        }
    }
    let primesFiltered = new Int32Array(amountX);
    let j = 0;
    for (let i = 0; i < primes.length; i++) {
        if (primes[i] !== 0) {
            primesFiltered[j] = primes[i];
            j += 1;
        }
    }
    return primesFiltered;
}