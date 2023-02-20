# 📌 **Manipulando Arquivos através de Promises**

## **Exemplo 01:**
```
const fs = require('fs')
const promesaDaleituraDoArquivo = fs.promises.readFile('./tarefas.csv')

promesaDaleituraDoArquivo
    .then((arquivo) => {
    console.log(arquivo.toString('utf-8'))
    })
    .catch((erro) => {
        console.log('Deu um erro', erro)
    })

/* Saída: Nome da tarefa; feita;
*         Lavar a louça; true;
*         tomar café; false;
*         Programar com os amigos; true;
*/
```
<br>

## **Exemplo 02:**
```
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

/*Saída: [
*          { nome: 'Lavar a louça', feito: true },
*          { nome: 'tomar café', feito: false },
*          { nome: 'Programar com os amigos', feito: true }
*        ]
*/
```