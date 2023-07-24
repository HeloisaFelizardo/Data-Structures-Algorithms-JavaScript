//LIFO - O último a entrar é o primeiro a sair

/* Nessa versão da classe Stack, usaremos uma propriedade count para nos ajudar a manter o controle do tamanho da pilha (e, consequentemente, para nos ajudar também a adicionar e a remover elementos da estrutura de dados) */

export class Stack {
	constructor() {
		this.count = 0; // propriedade para ajudar a manter o tamanho da pilha
		this.items = {};
	}
	//Um objeto é um conjunto de pares chave e valor. Para adicionar element à pilha, usaremos a variável count como a chave do objeto items, e element será o seu valor. Depois de fazer o push do elemento na pilha, incrementamos count.
	push(element) {
		this.items[this.count] = element;
		this.count++;
	}
	size() {
		return this.count; //retorna o tamanho da pilha
	}

	isEmpty() {
		return this.count === 0; //verifica se a pilha está vazia
	}

	pop() {
		//verificar se a pilha está vazia
		if (this.isEmpty()) {
			return undefined;
		}
		this.count--; //se a pilha não estiver vazia, decrementaremos a propriedade count
		const result = this.items[this.count]; //armazenaremos o valor no topo da pilha
		delete this.items[this.count]; //depois que o elemento for removido
		return result; //para que possamos devolvê-lo
	}

	//Para acessar o elemento do topo da pilha (ultimo elemento adicionado:8), precisamos acessar a chave como o valor 1. Então decrementamos a variável count de 2 para 1. Podemos acessar items[1], apagá-lo e retornar seu valor.
	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.count - 1];
	}

	//Para limpar a pilha, basta reiniciá-la com os mesmos valores usados no construtor
	clear() {
		this.items = {};
		this.count = 0;
	}

	//Método toString para que possamos exibir o conteudo da pilha, de modo semelhante a um array
	toString() {
		//Se a pilha estiver vazia, retornaremos uma string vazia
		if (this.isEmpty()) {
			return '';
		}
		//Se não, inicializaremos a string com o primeiro elemento, que está na base da pilha
		let objString = `${this.items[0]}`;
		//Então faremos uma iteração por todas as chaves da pilha
		for (let i = 1; i < this.count; i++) {
			//até o seu topo, adicionando uma virgula (,), seguida do próximo elemento
			objString = `${objString}, ${this.items[i]}`;
		}
		//Se a pilha contiver um único elemento, o código de iteração não será executado.
		return objString;
	}
}

const stack = new Stack();
stack.push(5);
stack.push(8);

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);
