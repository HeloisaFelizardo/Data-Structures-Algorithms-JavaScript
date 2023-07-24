class StaffList {
	constructor() {
		// Inicializa uma propriedade chamada 'members' como um array vazio
		this.members = [];
	}

	add(name, age) {
		// Adiciona um membro à lista com base no name e age fornecidos
		if (age > 20) {
			// Verifica se já existe um membro com o mesmo name na lista
			const existingMember = this.members.find((member) => member.name === name);
			if (existingMember) {
				// Se já existir, lança um erro informando que o membro com o mesmo name já existe
				throw new Error('Member with the same name already exists.');
			}
			// Adiciona o novo membro à lista
			this.members.push({ name, age });
		} else {
			// Se a age for menor ou igual a 20, lança um erro informando que a age do membro deve ser maior que 20
			throw new Error('Staff member age must be greater than 20');
		}
	}

	remove(name) {
		// Remove um membro da lista com base no name fornecido
		const index = this.members.findIndex((member) => member.name === name);
		if (index !== -1) {
			// Se o membro for encontrado na lista, remove-o usando o método 'splice'
			this.members.splice(index, 1);
			return true;
		} else {
			// Se o membro não for encontrado na lista, retorna false
			return false;
		}
	}

	getSize() {
		// Retorna o número de membros na lista
		return this.members.length;
	}
}

// Exemplo de uso
const staffList = new StaffList();

staffList.add('John', 25);
staffList.add('Robin', 23);
staffList.getSize();
staffList.remove('Robin');
staffList.getSize(); // 2
