import { defaultEquals } from '../util/util.mjs';
import { Node } from './models/linked-list-models.mjs';

export default class LinkedList {
	constructor(equalsFn = defaultEquals) {
		this.count = 0;
		this.head = undefined;
		this.equalsFn = equalsFn;
	}

	//Inserindo elementos no final da lista ligada
	push(element) {
		const node = new Node(element);
		let current;
		if (this.head == null) {
			this.head = node;
		} else {
			current = this.head;
			//obtém o último item
			while (current.next != null) {
				current = current.next;
			}
			//e atribui o novo elemento a next para criar a ligação
			current.next = node;
		}
		this.count++;
	}

	//Removendo elementos de uma posição específica da lista ligada
	removeAt(index) {
		//verifica valores fora do intervalo
		if (index >= 0 && index < this.count) {
			let current = this.head;
			//remove o primeiro item
			if (index === 0) {
				this.head = current.next;
			} else {
				/* let previous;
				for (let i = 0; i < index; i++) {
					previous = current;
					current = current.next;
				}
				//faz a ligação de previous com o next de current: pula esse elemento para removê-lo
				previous.next = current.next; */

				//código refatorado
				const previous = this.getElementAt(index - 1);
				current = previous.next;
				previous.next = current.next;
			}
			this.count--;
			return current.element;
		}
		return undefined;
	}

	//Percorrendo a lista com um laço até alcançar a posição desejada
	getElementAt(index) {
		if (index >= 0 && index <= this.count) {
			let current = this.head;
			for (let i = 0; i < index && current != null; i++) {
				current = current.next;
			}
			return current;
		}
		return undefined;
	}
}

const list = new LinkedList();
console.log(list);
list.push(15);
console.log(list);
list.push(10);
console.log(list);
