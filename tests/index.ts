// TODO multi threading?

import myModule from "..";
import { getPrimesTs } from "./getPrimesTsHelper";
import { testPrime } from "./testPrimeHelper";

const { __pin, getPrimes } = myModule;
// TODO Fix ts-expect-error with exporting ID?
// @ts-expect-error
const { __getArray } = myModule;

const NR_OF_PRIMES = Math.pow(10, 3);
const EXPECTED_LAST_PRIME = 997;

testPrime("AS", (x) => __getArray(__pin(getPrimes(x))), NR_OF_PRIMES, EXPECTED_LAST_PRIME);

testPrime("TS", (x) => Array.from(getPrimesTs(x)), NR_OF_PRIMES, EXPECTED_LAST_PRIME);

console.log("done");