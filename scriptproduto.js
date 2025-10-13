function navigateTo(page) {
    window.location.href = page;
}

// Exemplo de dados de produtos
const produtos = [
    { id_produto: 1, nome: "Cimento", descricao: "Cimento Portland", preco_compra: 20.00, preco_venda: 25.00, quantidade: 100, fornecedor: "Fornecedor A", imagem: "https://dcdn-us.mitiendanube.com/stores/003/468/564/products/trio1-d6ed093624d395d02f16954778165149-1024-1024.png" },
    { id_produto: 2, nome: "Areia", descricao: "Areia Fina", preco_compra: 15.00, preco_venda: 18.00, quantidade: 200, fornecedor: "Fornecedor B", imagem: "https://cdn.leroymerlin.com.br/products/areia_fina_lavada_saco_de_20kg_91941283_f53c_600x600.jpg" },
    // Adicione mais produtos conforme necessário
];

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
        `;
        produtosList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadProdutos);