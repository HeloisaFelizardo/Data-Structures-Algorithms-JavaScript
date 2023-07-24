function processOrderList(orderList, orderId, state) {
	// Cria uma nova lista chamada 'updatedList' a partir da lista de pedidos fornecida
	const updatedList = orderList
		.map((order) => {
			// Verifica se o ID do pedido corresponde ao ID fornecido
			if (order.id === orderId) {
				// Se o estado fornecido for 'Processing', atualiza o estado do pedido para 'Processing'
				if (state === 'Processing') {
					return { id: order.id, state: 'Processing' };
				}
				// Se o estado fornecido for 'Delivered', define o pedido como null para posterior remoção
				else if (state === 'Delivered') {
					return null;
				}
			}
			// Retorna o pedido original caso não corresponda ao ID fornecido
			return order;
		})
		// Filtra e remove os pedidos definidos como null durante a atualização
		.filter((order) => order !== null);

	// Retorna a lista atualizada de pedidos
	return updatedList;
}

// Exemplo de uso
const orderList = [
	{ id: 1, state: 'received' },
	{ id: 2, state: 'received' },
	{ id: 3, state: 'received' },
];

const updatedList1 = processOrderList(orderList, 2, 'Processing');
console.log(updatedList1);
// Output: [ { id: 1, state: 'received' }, { id: 2, state: 'Processing' }, { id: 3, state: 'received' } ]

const updatedList2 = processOrderList(orderList, 2, 'Delivered');
console.log(updatedList2);
// Output: [ { id: 1, state: 'received' }, { id: 3, state: 'received' } ]

const updatedList3 = processOrderList(orderList, 4, 'Processing');
console.log(updatedList3);
// Output: [ { id: 1, state: 'received' }, { id: 2, state: 'received' }, { id: 3, state: 'received' } ]
