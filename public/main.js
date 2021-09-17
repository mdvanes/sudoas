import loader from "./loader.js";

const setResult = (result) => document.getElementById("root").innerHTML = result;

loader.instantiate(fetch("optimized.wasm")).then(({ exports }) => {
    const { __pin, __getArray, getPrimes } = exports;
    const NR_OF_PRIMES = Math.pow(10, 3);

    try {
        const before = performance.now();
        const primes = __getArray(__pin(getPrimes(NR_OF_PRIMES)));
        const after = performance.now();
        const lastPrime = primes[primes.length - 1];
        console.log(`last prime: ${lastPrime}, time taken: ${after - before}`);
        // assert.strictEqual(lastPrime, 997, "highest prime in list");
        setResult(`Last prime: ${lastPrime}`);
    } catch (err) {
        console.log(err);
    }

});