## 📌 **Aula 04 - Promises e Assincronismo com JavaScript**
## 📎 **Sumário**
- **Aula 01 - Funcionamento das Promises**
- **Aula 02 - Manipulando Arquivos através de Promises**
- **Aula 03 - Async e Await**

<br>

## 📘 **Aula 01: Funcionamento das Promises**
O objeto Promiserepresenta a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

Uma Promise é um proxy para um valor não necessariamente conhecido quando a promessa é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promessa para fornecer o valor em algum momento no futuro.

Uma Promise está em um destes estados:

- pendente: estado inicial, nem cumprido nem rejeitado.
- cumprido: significa que a operação foi concluída com sucesso.
- rejeitado: significa que a operação falhou.

O estado eventual de uma promessa pendente pode ser cumprido com um valor ou rejeitado com um motivo (erro). Quando uma dessas opções ocorre, os manipuladores associados enfileirados pelo método thende uma promessa são chamados. Se uma promessa já foi executada ou rejeitada quando um manipulador correspondente para anexado, o manipulador será chamado, portanto, não há condição de corrida entre a conclusão de uma operação assíncrona e a anexação de seus manipuladores.

Uma promessa é considerada resolvida se for entregue ou rejeitada, mas não pendente.

```
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
}, 1000)

promessaDeUmNumeroQualquer
    .then((value)=> {
        console.log(value)
    })
    .catch((error)=> {
        console.log(error)
    })
    .finally(()=> {
        console.log('finalizou!')
    })
```

<br>

## 📘 **Aula 02: Manipulando Arquivos através de Promises**
Exemplo 01:
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

Exemplo 02:
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

<br>

## 📘 **Aula 03: Async e Await**
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