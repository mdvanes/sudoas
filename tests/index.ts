// TODO multi threading?
import assert from "assert";
// @ts-ignore
import { performance } from "perf_hooks";
import myModule from "..";
// Fix ts-expect-error with exporting ID?
// @ts-expect-error
const { __getArray } = myModule;
const NR_OF_PRIMES = Math.pow(10, 3);

try {
    const primes = __pin(getPrimes(NR_OF_PRIMES));
    // ...performance.now...
} catch (err) {
    // ...
}

//...js reference call...

console.log("ok");