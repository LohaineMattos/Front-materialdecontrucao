function navigateTo(page) {
    window.location.href = page;
}

let isEditing = false;
let editingId;

document.addEventListener('DOMContentLoaded', function() {
    editingId = localStorage.getItem('editingProduto');
    if (editingId) {
        isEditing = true;
        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        const produto = produtos.find(p => p.id_produto == editingId);
        if (produto) {
            document.getElementById('nome').value = produto.nome;
            document.getElementById('descricao').value = produto.descricao;
            document.getElementById('preco_compra').value = produto.preco_compra;
            document.getElementById('preco_venda').value = produto.preco_venda;
            document.getElementById('quantidade').value = produto.quantidade;
            document.getElementById('fornecedor').value = produto.fornecedor;
            document.getElementById('imagem').value = produto.imagem;
            document.querySelector('h1').textContent = 'Editar Produto';
            document.querySelector('button[type="submit"]').textContent = 'Salvar';
        }
    }
});

document.getElementById('produto-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco_compra = parseFloat(document.getElementById('preco_compra').value);
    const preco_venda = parseFloat(document.getElementById('preco_venda').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const fornecedor = document.getElementById('fornecedor').value;
    const imagem = document.getElementById('imagem').value;
    
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    
    if (isEditing) {
        const index = produtos.findIndex(p => p.id_produto == editingId);
        if (index !== -1) {
            produtos[index] = {
                id_produto: parseInt(editingId),
                nome: nome,
                descricao: descricao,
                preco_compra: preco_compra,
                preco_venda: preco_venda,
                quantidade: quantidade,
                fornecedor: fornecedor,
                imagem: imagem
            };
        }
        localStorage.removeItem('editingProduto');
    } else {
        const nextId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id_produto)) + 1 : 1;
        
        const newProduto = {
            id_produto: nextId,
            nome: nome,
            descricao: descricao,
            preco_compra: preco_compra,
            preco_venda: preco_venda,
            quantidade: quantidade,
            fornecedor: fornecedor,
            imagem: imagem
        };
        
        produtos.push(newProduto);
    }
    
    localStorage.setItem('produtos', JSON.stringify(produtos));
    
    navigateTo('produtos.html');
});