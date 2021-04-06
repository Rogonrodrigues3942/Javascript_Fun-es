console.log('\n**** Funçao com parâmtros variáveis. 1ª versão de fixação ****')
function soma()
{
    resultado = 0

    for(i in arguments)
        resultado += arguments[i]
    
    return resultado
}

console.log(soma())
console.log(soma('a','d','e','v'))
console.log(soma(24, 25))