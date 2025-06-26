/*
7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.
 */

const prompt = require('prompt-sync')();

function ordPreco(produtos) {
    const produtosOrdenados = produtos
    .sort((a, b) => a.preco - b.preco)  // Orde por preço
    .map(p => p.nome);                  // Nomes
    return produtosOrdenados;
}

let produtos = [];

for (let i = 0; i < 3; i++) {
    const nome = prompt(`Digite o nome do produto #${i + 1}: `);
    const preco = parseFloat(prompt(`Digite o preço do produto #${i + 1}: `));
    
    produtos.push({ nome, preco });
}

console.log("Produtos ordenados por preço:", ordPreco(produtos));