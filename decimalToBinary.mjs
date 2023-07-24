import { Stack } from './modules/stack.mjs';

//Convertendo números decimais para binários.
function decimalToBinary(decNumber) {
	const remStack = new Stack();
	let number = decNumber;
	let rem;
	let binaryString = '';
	while (number > 0) {
		rem = Math.floor(number % 2);
		remStack.push(rem);
		number = Math.floor(number / 2);
	}
	while (!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}
	return binaryString;
}

console.log(decimalToBinary(233));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));
