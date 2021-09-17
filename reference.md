index.js - generated

package.json - generated and modified to:
	asbuild:optimized: ...release --tsdFile index.d.ts --exportRuntime",
	...
	devDependencies
		@types/assert
		ts-node
		typescript

README.md
	yarn asbuild && yarn test
	files in public/ are manually copied (optimized.wasm, loader.js)
	serve public/
 
tsconfig.json
	{ "$schema", "./tsconfig.schema.json", compilerOptions: { target: es5, lib: [dom, dom.iterable, esnext], moduleResolution: node, esModuleInterop: true}, include: ["tests"] }

assembly/index.ts
	const isPrime = (nr: i32): bool => {
		if (nr < 2) { return 0; }
		for(let i = 2; i < nr; i++) { if(nr % i === 0) { return 0; }} return 1; };
	
	// NOTE: arrow notation is not supported for exported functions
	export function getPrimes(amount: i32): Int32Array {
		if(amount > Math.pow(10,8)) {
			throw new Error("Input too high");
		}
		let primes = new Int32Array(amount);
		for(let i = 1; i < amount; i++) {
			primes[i] = isPrime(i) ? i : 0;
		}
		let amountX = 0;
		for (let i = 0; i < primes.length; i++) {
			if(primes[i] !== 0) {
				amountX += 1;
			}
		}
		let primesFiltered = new Int32Array(amountX);
		let j=0;
		for(let i = 0; i < primes.length; i++) {
			if(primes[i]!==0) {
				primesFiltered[j] = primes[i];
				j += 1; 
			}
		}
		return primesFiltered;
        }

	// TODO needs Int32Array_ID conform createArray example?

public/index.html
	<body>
	<div id="root">loading...</div>
	<script type="module" src="./main.js"></script>
	</body>

public/main.js
	import loader from "./loader.js";
	const setResult = (...) => ...getElemntById(root).innerHTML
	loader.instantiate(fetch("optimized.wasm")).then(({ exports }) => {
        	const result = exports.add(1,2);
		setResult(result);
	});

tests/index.ts
	// TODO multi threading?
	import assert from "assert";
	// @ts-ignore
	import { performance } from "perf_hooks";
	import myModule from "..";
	// Fix ts-expect-error with exporting ID?
	// @ts-expect-error
	const { __getArray } = myModule;
	const NR_OF_PRIMES=Math.pow(10,3);
	
	try {
		const primes = __pin(getPrimes(NR_OF_PRIMES));
		... performance.now...
	} catch(err) {
		...
	}
	
	... js reference call...

	console.log("ok");
