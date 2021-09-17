import assert from "assert";
// @ts-ignore
import { performance } from "perf_hooks";

export const testPrime = (label: string, getPrimesFn: (nr: number) => number[], max: number, expectedLastPrime: number): void => {
    try {
        const before = performance.now();
        const primes = getPrimesFn(max);
        const after = performance.now();
        const lastPrime = primes[primes.length - 1]; 
        console.log(`${label} max: ${max} last prime: ${lastPrime}, time taken: ${after - before}`);
        assert.strictEqual(lastPrime, expectedLastPrime, "highest prime in list");
    } catch (err) {
        console.log(err);
    }
}