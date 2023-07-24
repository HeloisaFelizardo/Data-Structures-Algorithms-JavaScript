//O Deque implementa tanto o FIFO quanto o LIFO
export class Deque {
	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}

	//Esse método retorna true se a fila não contiver nenhum elemento e false se o tamanho for maior que 0
	isEmpty() {
		return this.size() === 0;
	}
	//Esse método retorna o número de elementos contidos na fila. É semelhanto a propriedade length do array.
	size() {
		return this.count - this.lowestCount;
	}
	//Método para limpar todos os elementos da fila
	clear() {
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}

	//Método toString para que possamos exibir o conteudo da pilha, de modo semelhante a um array
	toString() {
		if (this.isEmpty()) {
			return '';
		}
		let objString = `${this.items[this.lowestCount]}`;
		for (let i = this.lowestCount + 1; i < this.count; i++) {
			objString = `${objString}, ${this.items[i]}`;
		}
		return objString;
	}

	//Esse método adiciona um novo elemento na frente do deque
	addFront(element) {
		if (this.isEmpty()) {
			this.addBack(element);
		} else if (this.lowestCount > 0) {
			this.lowestCount--;
			this.items[this.lowestCount] = element;
		} else {
			for (let i = this.count; i > 0; i--) {
				this.items[i] = this.items[i - 1];
			}
			this.count++;
			this.lowestCount = 0;
			this.items[0] = element;
		}
	}

	//Esse método adiciona um novo elemento no fim do deque
	addBack(element) {
		this.items[this.count] = element;
		this.count++;
	}

	//Esse método remove o primeiro elemento do deque
	removeFront() {
		if (this.isEmpty()) {
			return undefined;
		}
		const result = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.lowestCount++;
		return result;
	}

	//Esse método remove o último elemento do deque
	removeBack() {
		//verificar se a pilha está vazia
		if (this.isEmpty()) {
			return undefined;
		}
		this.count--; //se a pilha não estiver vazia, decrementaremos a propriedade count
		const result = this.items[this.count]; //armazenaremos o valor no topo da pilha
		delete this.items[this.count]; //depois que o elemento for removido
		return result; //para que possamos devolvê-lo
	}

	//Esse método retorna o primeiro elemento do deque
	peekFront() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.lowestCount];
	}

	//Esse método retorna o último elemento do deque
	peekBack() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.count - 1];
	}
}

/* const deque = new Deque();

console.log(deque.isEmpty());
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());
deque.addBack('Camila');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addFront('John');
console.log(deque.toString());
 */
