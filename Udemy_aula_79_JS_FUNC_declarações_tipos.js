console.log("\n*** Funções - Tipos de declarações ***\n")

//console.log(mult(3,4))
//console.log(subt(5,4))
console.log(soma(5,3))

/**Declaração tradicional */
function soma(x, y){
    return x +y
}

/**Declaração expression - função anônima */
const subt = function(x, y){ return x - y}

/**Declaracao named function expression */

const mult = function mult(x, y){return x * y}

console.log(mult(3,4))
console.log(subt(5,4))
console.log(soma(4,3))