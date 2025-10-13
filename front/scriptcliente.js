function navigateTo(page) {
    window.location.href = page;
}

// Exemplo de dados de clientes
const clientes = [
    { id_cliente: 1, nome: "João Silva", cpf: 123456789, cnpj: null, email: "joao@example.com", endereco: "Rua A, 123" },
    { id_cliente: 2, nome: "Maria Oliveira", cpf: 987654321, cnpj: 12345678000199, email: "maria@example.com", endereco: "Rua B, 456" },
    // Adicione mais clientes conforme necessário
];

function loadClientes() {
    const clientesList = document.getElementById('clientes-list');
    if (clientesList) {
        clientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.id_cliente}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.cpf}</td>
                <td>${cliente.cnpj || ''}</td>
                <td>${cliente.email}</td>
                <td>${cliente.endereco}</td>
            `;
            clientesList.appendChild(row);
        });
    } else {
        console.error('Element with ID "clientes-list" not found.');
    }
}

document.addEventListener('DOMContentLoaded', loadClientes);