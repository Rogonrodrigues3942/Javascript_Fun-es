console.log('\nFunçao com parâmtros variáveis')
function soma()
{
    let soma = 0

    for(i in arguments)
        soma += arguments[i]
    
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.2, 2.3, 3.4))
console.log(soma('a','b', 'c'))

/**o comando arguments preserva o tipo de dado e faz a soma ou concantenação. */