function navigateTo(page) {
    window.location.href = page;
}

let isEditing = false;
let editingId;

document.addEventListener('DOMContentLoaded', function() {
    editingId = localStorage.getItem('editingFuncionario');
    if (editingId) {
        isEditing = true;
        const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
        const funcionario = funcionarios.find(f => f.id_funcionario == editingId);
        if (funcionario) {
            document.getElementById('nome').value = funcionario.nome;
            document.getElementById('cpf').value = funcionario.cpf;
            document.getElementById('email').value = funcionario.email;
            document.getElementById('data_nasc').value = funcionario.data_nasc;
            document.getElementById('endereco').value = funcionario.endereco;
            document.getElementById('salario').value = funcionario.salario;
            document.getElementById('imagem').value = funcionario.imagem;
            document.querySelector('h1').textContent = 'Editar Funcionário';
            document.querySelector('button[type="submit"]').textContent = 'Salvar';
        }
    }
});

document.getElementById('funcionario-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const data_nasc = document.getElementById('data_nasc').value;
    const endereco = document.getElementById('endereco').value;
    const salario = parseFloat(document.getElementById('salario').value);
    const imagem = document.getElementById('imagem').value;
    
    let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    
    if (isEditing) {
        const index = funcionarios.findIndex(f => f.id_funcionario == editingId);
        if (index !== -1) {
            funcionarios[index] = {
                id_funcionario: parseInt(editingId),
                nome: nome,
                cpf: cpf,
                email: email,
                data_nasc: data_nasc,
                endereco: endereco,
                salario: salario,
                imagem: imagem
            };
        }
        localStorage.removeItem('editingFuncionario');
    } else {
        const nextId = funcionarios.length > 0 ? Math.max(...funcionarios.map(f => f.id_funcionario)) + 1 : 1;
        
        const newFuncionario = {
            id_funcionario: nextId,
            nome: nome,
            cpf: cpf,
            email: email,
            data_nasc: data_nasc,
            endereco: endereco,
            salario: salario,
            imagem: imagem
        };
        
        funcionarios.push(newFuncionario);
    }
    
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
    
    navigateTo('funcionarios.html');
});