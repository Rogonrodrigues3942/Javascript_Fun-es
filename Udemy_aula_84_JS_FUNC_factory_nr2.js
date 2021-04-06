console.log('\n*** Função() factory - #2 ***\n')
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notepad',3000))
console.log(criarProduto('iPod', 1000))

/**A função factory cria um novo objeto a cada execução. */