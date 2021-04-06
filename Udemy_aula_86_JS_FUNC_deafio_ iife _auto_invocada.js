console.log('\n*** Função() IIFE - auto invocada ***\n')

(function() {
    console.log('Autamente independente, executada na hora!!')
    console.log('Foge do escopo de global para execução!!')
})()
