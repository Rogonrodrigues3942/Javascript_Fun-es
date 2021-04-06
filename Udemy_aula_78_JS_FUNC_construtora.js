console.log('\nFunção() construtora \n')
/**classe é outra maneira de  se escrever funcão. */

function Carro(velocidadeMax = 200, delta =5){
    /**atributo */
    let velocidadeAtual = 0

    /**Método público */
    this.acelerar = function(){

        if(velocidadeAtual + delta<= velocidadeMax)
                velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMax
    }

    /**Método publico 2 */
    this.getVelocidadeAtual = function(){ return velocidadeAtual}

}

const uno = new Carro
console.log("Velocidade do uno:")
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const Ferrari = new Carro (350, 20)
console.log('\nVelocidade da Ferrari:')
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof Ferrari)
console.log(typeof uno)




