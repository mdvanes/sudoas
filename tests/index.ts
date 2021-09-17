// TODO multi threading?
import assert from "assert";
// @ts-ignore
import { performance } from "perf_hooks";
import myModule from "..";
import { getPrimesTs } from "./getPrimesTsHelper";
import { testPrime } from "./testPrimeHelper";

const { __pin, getPrimes } = myModule;
// Fix ts-expect-error with exporting ID? TODO
// @ts-expect-error
const { __getArray } = myModule;

const NR_OF_PRIMES = Math.pow(10, 3);
const EXPECTED_LAST_PRIME = 997;

testPrime("AS", (x) => __getArray(__pin(getPrimes(x))), NR_OF_PRIMES, EXPECTED_LAST_PRIME);

testPrime("TS", (x) => Array.from(getPrimesTs(x)), NR_OF_PRIMES, EXPECTED_LAST_PRIME);

console.log("ok");