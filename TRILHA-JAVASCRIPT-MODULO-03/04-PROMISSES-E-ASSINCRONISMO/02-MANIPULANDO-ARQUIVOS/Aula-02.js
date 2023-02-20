//Exemplo 01
const fs = require('fs')
const promesaDaleituraDoArquivo = fs.promises.readFile('./tarefas.csv')

promesaDaleituraDoArquivo
    .then((arquivo) => {
    console.log(arquivo.toString('utf-8'))
    })
    .catch((erro) => {
        console.log('Deu um erro', erro)
    })


//Exemplo 02
//chamando arquivos quando estiver dentro de uma pasta
const path = require('path')
const filePath = path.resolve(__dirname, 'tarefas.csv')
const promesaleituraDoArquivo = fs.promises.readFile(filePath)

promesaleituraDoArquivo
    .then((arquivo)=> arquivo.toString('utf-8'))
    .then((textoDoArquivo)=> textoDoArquivo.split('\n').slice(1))
    .then((linhasSemOCabecalho)=> linhasSemOCabecalho.map((linha)=> {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error)=> console.log('Deu Ruim', error))