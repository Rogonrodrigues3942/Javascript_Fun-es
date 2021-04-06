console.log('\nFunção() callback #2 \n')
console.log('\n1) Sem callback')
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.6, 2.0, 6.9]

let notasBaixas1 = []

for(let i in notas){
    if(notas[i] < 7)
        notasBaixas1.push(notas[i])
}
console.log(notasBaixas1)

console.log('\n2) Criando callback')
notasBaixas2 = notas.filter(function(nota){ return nota < 7})
console.log()
console.log(notasBaixas2)

console.group('\n3) Usando a função arrow na função callback')
let notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

console.log('\n4) Usando a função callback e criando função arrow')
const notaMenor7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenor7)
console.log(notasBaixas4)
