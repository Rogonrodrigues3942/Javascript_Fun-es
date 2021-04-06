console.log('\n******\nFunção() callback #1- 2ª revisão\n********\n')
const alimentos = ['arroz','feijão', 'carne moida','alface','batata']

function mostrar(nome, nr){
    console.log(`${nr+1}. ${nome}`)
}
/**A funcão mostrar() é manipulada pelo pelo pelo comando forEach, mostrando os dados do array alimentos.
 * Ao ser chamada a função pelo objeto(alimentos) mostrar a composição de dados que compõe o array alimentos.
 */

alimentos.forEach(mostrar)
console.log(typeof alimentos)