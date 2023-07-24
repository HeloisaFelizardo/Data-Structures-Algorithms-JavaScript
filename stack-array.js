/* Precisamos de uma estrutura de dados que armazenará os elementos da pilha. A estrutura de dados nos permite adicionar ou remover elementos de qualquer posição da estrutura de dados. */

class Stack {
	constructor() {
		this.items = []; //Array usado para armazenar os elementos
	}

	//Esse método diciona um elemento ou varios elementos no topo da pilha.
	push(element) {
		this.items.push(element);
	}

	//Esse método remove o elemento que está no topo da pilha. Também retorna o elemento removido.
	pop() {
		this.items.pop();
	}

	//Esse método devolve o elemento que está no topo da pilha. A pilha não é modificada (o elemento não é removido, ele é apenas retornado como informação)
	peek() {
		return this.items[this.items.length - 1];
	}

	//Esse método devolve true se a pilha não contiver nenhum elemento e false se o tamanho da pilha for maior que 0.
	isEmpty() {
		return this.items.length === 0;
	}

	//Esse método retorna o numero de elementos contidos na pilha. É semelhante a propriedade lenght.
	size() {
		return this.items.length;
	}

	//Esse método remove todos os elementos da pilha.
	clear() {
		this.items = [];
	}
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
console.log(stack.peek()); //retorna 8 porque foi o ultimo elemento adicionado na pilha

stack.push(11);
console.log(stack.size()); //exibe 3
console.log(stack.isEmpty()); //exibe false

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size()); //exibe 2
