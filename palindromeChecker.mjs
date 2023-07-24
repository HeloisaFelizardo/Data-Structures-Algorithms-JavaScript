import { Deque } from './modules/deque.mjs';

/* Algoritmo utilizando um deque de estrutura de dados para verificar se uma frase ou string é um palíndromo. Um palíndromo é uma palavra, frase, número ou outra sequencia de caracteres que é lido igualmente de trás para frente ou de frente para trás, por exemplo 'madam' ou 'racecar' */

function palindromeChecker(aString) {
	if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
		return false;
	}
	const deque = new Deque();
	const lowerString = aString.toLocaleLowerCase().split(' ').join('');
	let isEqual = true;
	let firstChar, lastChar;
	for (let i = 0; i < lowerString.length; i++) {
		deque.addBack(lowerString.charAt(i));
	}
	while (deque.size() > 1 && isEqual) {
		firstChar = deque.removeFront();
		lastChar = deque.removeBack();
		if (firstChar !== lastChar) {
			isEqual = false;
		}
	}
	return isEqual;
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));
