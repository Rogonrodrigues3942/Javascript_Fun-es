console.log('\n*** Função - Parâmetro padrão ****')
console.log('1ª parte -  estratégia 1 para declara valor padrão.')

function soma1( a, b, c ){

    a = a || 1
    b = b || 1
    c = c || 1

    return a+b+c

}

console.log(soma1(), soma1(2,4,6), soma1('a',2, 1), soma1('x', 'y', 3))

console.log('\n2ª parte, estratégias 2, 3 e 4 para declara valor padrão\n')
function soma2(a, b, c){
    
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c    //nesta linha fará verificação de nr valido, evitando somar sting a operação. 

    return a+b+c

}

console.log(soma2(), soma2(2,4,6), soma2('a',2, 1), soma2(40, 'y', ))

console.log('\n3ª parte, estratégia ECma 2015declara valor padrão\n')
function soma3(a =1, b = 2, c = 3){
    return a+b+c
}

console.log(soma3())
