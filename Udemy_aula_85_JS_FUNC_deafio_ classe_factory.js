console.log('\n*** Função() factory vs Classe ***\n')
console.log('*** Objeto gerado pelo sistema de funcao construtora. ***')
function Pessoa(nome){
        
    this.nome = nome 
       
    this.falar= function (){
            console.log(`Meu nome é: ${this.nome}`)
        }
}

const p1 = new Pessoa ('Rogério')
const p2 = new Pessoa ('Rafael')
const p3 = new Pessoa ('Samuel')
p1.falar()
p2.falar()
p3.falar()