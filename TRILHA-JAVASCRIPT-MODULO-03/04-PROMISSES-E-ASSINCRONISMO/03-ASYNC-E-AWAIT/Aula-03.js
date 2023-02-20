const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoArquivo = arquivo.toString('utf-8')
        console.log(textoArquivo)
    } catch(error) {
        console.log(error)
    } finally {
        console.log('Finalizou!')
    }
    
}

buscarArquivo()