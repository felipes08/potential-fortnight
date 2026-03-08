// const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

// console.log(`Segundo item da lista: ${listaDeCompras[1]}`)
// listaDeCompras[listaDeCompras.length - 1] = 'fruta'
// console.log('Lista após modificação:', listaDeCompras)





// const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];
// for(let value of estudantes){
//     console.log('Estudante:', value)
// }





// const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];
// mensagens.forEach((value) => console.log('Notificação:', value))



// const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];
// tarefas.push('Pagar boletos')
// console.log(tarefas)
// tarefas.pop()
// console.log(tarefas)











// const pedidos = ['camiseta', 'calça', 'tênis'];
// const pedidosCopia = pedidos.slice(0)
// pedidosCopia.push('boné')
// console.log(pedidos)
// console.log(pedidosCopia)








// const livros = ['Dom Casmurro', 'Capitães da Areia', 'Iracema'];
// const livroProcurado = 'O Cortiço';
// let found = false

// for(let i=0; i<livros.length; i++){
//     if(livros[i] === livroProcurado){
//         console.log(`O livro ${livroProcurado} está disponível.`)
//         found = true
//         break
//     }
// }
// if(!found)console.log(`O livro ${livroProcurado} não foi encontrado.`)













// const precos = [100, 80, 50, 120];
// let precosDescontos = precos.map((x) => x * 0.9)
// console.log(precosDescontos)






// const participantes = [
//   { nome: 'Ana', idade: 17 },
//   { nome: 'Bruno', idade: 22 },
//   { nome: 'Carla', idade: 19 },
//   { nome: 'Daniel', idade: 15 },
//   { nome: 'Eduarda', idade: 25 }
// ];

// let participantesFiltrados = participantes.filter(valor =>{
//     if(valor.idade >= 18){
//         console.log(`Acesso liberado para: ${valor.nome}`)
//         return valor
//     }
// } )
// console.log(participantesFiltrados)
// let nomeParticipantes = participantesFiltrados.map((pessoa) => pessoa.nome)
// console.log("Lista de aprovados:",nomeParticipantes)

















const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];
for(let i=0; i<produtos.length; i++){
    console.log(`Nome: ${produtos[i].nome}\t | Preço: ${produtos[i].preco}\t | Quantidade vendida: ${produtos[i].quantidadeVendida}`)
}

console.log('\nProdutos com alto volume de vendas (>100 unidades):')
const produtosFiltrados = produtos.filter(p => {
    p.quantidadeVendida > 100 ? console.log(p.nome) : false
    return p.quantidadeVendida > 100
})

console.log('\nTotal de vendas por produto: ')
const pMaisVendidos = produtos.map((p) => {
    console.log(`${p.nome}: R$${p.preco * p.quantidadeVendida}`)
    let produtosMV = new Object
    produtosMV.nome = p.nome
    produtosMV.lucro = p.preco * p.quantidadeVendida
    return produtosMV
})
let maior = 0
let indice = 0
for(let i=0; i<pMaisVendidos.length; i++){
    if(i === 0){
        maior = pMaisVendidos[i].lucro
        indice = i
    } 
    if(pMaisVendidos[i].lucro > maior){
        maior = pMaisVendidos[i].lucro
        indice = i
    } 
}

console.log(`\nProduto mais lucrativo: ${pMaisVendidos[indice].nome} com R$${pMaisVendidos[indice].lucro} em vendas.`)

console.log('Meu primeiro commit')