console.log('\n*** Função() factory vs Classe ***\n')
console.log('*** Objeto gerado pelo sistema de classe. ***')
class Pessoa{
        constructor(nome){
            this.nome = nome 
        }

        falar(){
            console.log(`Meu nome é: ${this.nome}`)
        }
}

const p1 = new Pessoa ('Rogério')
p1.falar()

console.log("\n*** Objeto gerado com função construtora ***")
const pessoa1 = nome =>{ return{
    falar:() =>console.log(`Meu nome é: ${nome}`)
    }
}

const p2 = pessoa1('Rafael')
p2.falar()