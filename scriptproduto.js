function navigateTo(page) {
    window.location.href = page;
}

// Exemplo de dados de produtos
const defaultProdutos = [
    { id_produto: 1, nome: "Cimento", descricao: "Cimento Portland", preco_compra: 20.00, preco_venda: 25.00, quantidade: 100, fornecedor: "Fornecedor A", imagem: "https://dcdn-us.mitiendanube.com/stores/003/468/564/products/trio1-d6ed093624d395d02f16954778165149-1024-1024.png" },
    { id_produto: 2, nome: "Areia", descricao: "Areia Fina", preco_compra: 15.00, preco_venda: 18.00, quantidade: 200, fornecedor: "Fornecedor B", imagem: "https://cdn.leroymerlin.com.br/products/areia_fina_lavada_saco_de_20kg_91941283_f53c_600x600.jpg" },
    // Adicione mais produtos conforme necessário
];

let produtos = JSON.parse(localStorage.getItem('produtos')) || defaultProdutos;

function loadProdutos() {
    const produtosList = document.getElementById('produtos-list');
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</p>
            <p>Preço de Compra: R$ ${produto.preco_compra.toFixed(2)}</p>
            <p>Preço de Venda: R$ ${produto.preco_venda.toFixed(2)}</p>
            <p>Quantidade: ${produto.quantidade}</p>
            <p>Fornecedor: ${produto.fornecedor}</p>
            <button onclick="editProduto(${produto.id_produto})">Editar</button>
            <button onclick="deleteProduto(${produto.id_produto})">Excluir</button>
        `;
        produtosList.appendChild(card);
    });
}

function deleteProduto(id) {
    produtos = produtos.filter(produto => produto.id_produto !== id);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    location.reload(); // Reload to update the list
}

function editProduto(id) {
    localStorage.setItem('editingProduto', id);
    window.location.href = 'cadastro_produto.html';
}

document.addEventListener('DOMContentLoaded', loadProdutos);