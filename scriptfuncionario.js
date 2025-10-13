function navigateTo(page) {
    window.location.href = page;
}

// Exemplo de dados de funcionários
const funcionarios = [
    { id_funcionario: 1, nome: "Carlos Souza", cpf: 123456789, email: "carlos@example.com", data_nasc: "1985-05-15", endereco: "Rua C, 789", salario: 3500.00 },
    { id_funcionario: 2, nome: "Ana Pereira", cpf: 987654321, email: "ana@example.com", data_nasc: "1990-08-22", endereco: "Rua D, 101", salario: 4200.00 },
    // Adicione mais funcionários conforme necessário
];

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
        `;
        funcionariosList.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', loadFuncionarios);