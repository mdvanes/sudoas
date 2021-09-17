// TODO multi threading?
import assert from "assert";
// @ts-ignore
import { performance } from "perf_hooks";
import myModule from "..";

const { __pin, getPrimes } = myModule;
// Fix ts-expect-error with exporting ID? TODO
// @ts-expect-error
const { __getArray } = myModule;
const NR_OF_PRIMES = Math.pow(10, 3);

try {
    const before = performance.now();
    const primes = __getArray(__pin(getPrimes(NR_OF_PRIMES)));
    const after = performance.now();
    const lastPrime = primes[primes.length - 1]; 
    console.log(`last prime: ${lastPrime}, time taken: ${after - before}`);
    assert.strictEqual(lastPrime, 997, "highest prime in list");
} catch (err) {
    console.log(err);
}

//...js reference call... TODO

console.log("ok");