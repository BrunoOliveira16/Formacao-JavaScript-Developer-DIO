# 📌 **Async e Await**
É uma forma de escrever código assíncrono como se estivesse escrevendo código síncrono.

```
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

/*
*  Saída: 
*      Nome da tarefa; feita;
*      Lavar a louça; true;
*      tomar café; false;
*      Programar com os amigos; true;
*/
```