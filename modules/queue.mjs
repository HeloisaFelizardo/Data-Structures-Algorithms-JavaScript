//FIFO - O primeiro que entra é o primeiro que sai

export class Queue {
	constructor() {
		//Propriedade para ajudar a controlar o tamanho da fila
		this.count = 0;
		//E como removeremos os elementos da frente da fila, também precisamos de uma variável para ajudar a manter o controle do primeiro elemento.
		this.lowestCount = 0;
		// Objeto usado para armazenar os elementos
		this.items = {};
	}

	//Esse método adiciona um novo elemento do final da fila
	enqueue(element) {
		this.items[this.count] = element;
		this.count++;
	}
	//Esse método remove o primeiro elemento da fila ( o item que está na frente ). Também retorna o elemento removido.
	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}
		const result = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.lowestCount++;
		return result;
	}
	//Método que retorna o elemento que está na frente da fila.
	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.lowestCount];
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
}

const queue = new Queue();

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');

console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue(); //Remove John
queue.dequeue(); //Remove Jack
console.log(queue.toString());
console.log(queue.size());
