function navigateTo(page) {
    window.location.href = page;
}

// Exemplo de dados de funcionários
const defaultFuncionarios = [
    { id_funcionario: 1, nome: "Carlos Souza", cpf: 123456789, email: "carlos@example.com", data_nasc: "1985-05-15", endereco: "Rua C, 789", salario: 3500.00, imagem: "" },
    { id_funcionario: 2, nome: "Ana Pereira", cpf: 987654321, email: "ana@example.com", data_nasc: "1990-08-22", endereco: "Rua D, 101", salario: 4200.00, imagem: "" },
    // Adicione mais funcionários conforme necessário
];

let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || defaultFuncionarios;

function loadFuncionarios() {
    const funcionariosList = document.getElementById('funcionarios-list');
    funcionarios.forEach(funcionario => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${funcionario.id_funcionario}</td>
            <td>${funcionario.nome}</td>
            <td>${funcionario.cpf}</td>
            <td>${funcionario.email}</td>
            <td>${new Date(funcionario.data_nasc).toLocaleDateString()}</td>
            <td>${funcionario.endereco}</td>
            <td>${funcionario.salario.toFixed(2)}</td>
            <td>${funcionario.imagem ? `<img src="${funcionario.imagem}" alt="Imagem" width="50">` : ''}</td>
            <td><button onclick="editFuncionario(${funcionario.id_funcionario})">Editar</button> <button onclick="deleteFuncionario(${funcionario.id_funcionario})">Excluir</button></td>
        `;
        funcionariosList.appendChild(row);
    });
}

function deleteFuncionario(id) {
    funcionarios = funcionarios.filter(funcionario => funcionario.id_funcionario !== id);
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
    location.reload(); // Reload to update the list
}

function editFuncionario(id) {
    localStorage.setItem('editingFuncionario', id);
    window.location.href = 'cadastro_funcionario.html';
}

document.addEventListener('DOMContentLoaded', loadFuncionarios);