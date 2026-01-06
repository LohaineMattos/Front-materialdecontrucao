function navigateTo(page) {
    window.location.href = page;
}

let isEditing = false;
let editingId;

document.addEventListener('DOMContentLoaded', function() {
    editingId = localStorage.getItem('editingCliente');
    if (editingId) {
        isEditing = true;
        const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        const cliente = clientes.find(c => c.id_cliente == editingId);
        if (cliente) {
            document.getElementById('nome').value = cliente.nome;
            document.getElementById('cpf').value = cliente.cpf;
            document.getElementById('cnpj').value = cliente.cnpj || '';
            document.getElementById('email').value = cliente.email;
            document.getElementById('endereco').value = cliente.endereco;
            document.getElementById('imagem').value = cliente.imagem;
            document.querySelector('h1').textContent = 'Editar Cliente';
            document.querySelector('button[type="submit"]').textContent = 'Salvar';
        }
    }
});

document.getElementById('cliente-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const cnpj = document.getElementById('cnpj').value || null;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const imagem = document.getElementById('imagem').value;
    
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    
    if (isEditing) {
        const index = clientes.findIndex(c => c.id_cliente == editingId);
        if (index !== -1) {
            clientes[index] = {
                id_cliente: parseInt(editingId),
                nome: nome,
                cpf: cpf,
                cnpj: cnpj,
                email: email,
                endereco: endereco,
                imagem: imagem
            };
        }
        localStorage.removeItem('editingCliente');
    } else {
        const nextId = clientes.length > 0 ? Math.max(...clientes.map(c => c.id_cliente)) + 1 : 1;
        
        const newCliente = {
            id_cliente: nextId,
            nome: nome,
            cpf: cpf,
            cnpj: cnpj,
            email: email,
            endereco: endereco,
            imagem: imagem
        };
        
        clientes.push(newCliente);
    }
    
    localStorage.setItem('clientes', JSON.stringify(clientes));
    
    navigateTo('clientes.html');
});