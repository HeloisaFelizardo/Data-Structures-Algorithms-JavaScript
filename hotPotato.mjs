import { Queue } from './modules/queue.mjs';

//Simulação do jogo Batata Quente
function hotPotato(elementList, num) {
	const queue = new Queue();
	const eliminatedList = [];
	for (let i = 0; i < elementList.length; i++) {
		queue.enqueue(elementList[i]);
	}
	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
		}
		eliminatedList.push(queue.dequeue());
	}
	return {
		eliminated: eliminatedList,
		winner: queue.dequeue(),
	};
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 4);
result.eliminated.forEach((name) => {
	console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`);
