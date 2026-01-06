function navigateTo(page) {
    window.location.href = page;
}

// Exemplo de dados de clientes
const defaultClientes = [
    { id_cliente: 1, nome: "João Silva", cpf: 123456789, cnpj: null, email: "joao@example.com", endereco: "Rua A, 123", imagem: "" },
    { id_cliente: 2, nome: "Maria Oliveira", cpf: 987654321, cnpj: 12345678000199, email: "maria@example.com", endereco: "Rua B, 456", imagem: "" },
    // Adicione mais clientes conforme necessário
];

let clientes = JSON.parse(localStorage.getItem('clientes')) || defaultClientes;

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
                <td>${cliente.imagem ? `<img src="${cliente.imagem}" alt="Imagem" width="50">` : ''}</td>
                <td><button onclick="editCliente(${cliente.id_cliente})">Editar</button> <button onclick="deleteCliente(${cliente.id_cliente})">Excluir</button></td>
            `;
            clientesList.appendChild(row);
        });
    } else {
        console.error('Element with ID "clientes-list" not found.');
    }
}

function deleteCliente(id) {
    clientes = clientes.filter(cliente => cliente.id_cliente !== id);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    location.reload(); // Reload to update the list
}

function editCliente(id) {
    localStorage.setItem('editingCliente', id);
    window.location.href = 'cadastro_cliente.html';
}

document.addEventListener('DOMContentLoaded', loadClientes);