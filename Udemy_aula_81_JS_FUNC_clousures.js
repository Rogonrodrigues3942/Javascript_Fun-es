console.log('\n*** Funçao - Clousures & Escopo ***\n')

/**Clousure é o escopo criado quando uma função é declarada. Esse escopo perimite a função acessar e manipular
 * as váriáveis esternas a função. */

 const x = 'Global'

 function externa(){
     const x = 'Local'
     function interna()
     {
         return x
     }
     return interna
 }

 minhaFuncao = externa()
 console.log(minhaFuncao())