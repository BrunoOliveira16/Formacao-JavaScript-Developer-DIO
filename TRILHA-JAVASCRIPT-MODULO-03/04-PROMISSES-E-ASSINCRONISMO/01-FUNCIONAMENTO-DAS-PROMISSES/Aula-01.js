//Estrutura básica
new Promise((resolve, reject) => {
    // ...
    resolve()
    // ...
    reject()
})

//Exemplo
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
}, 1000)

promessaDeUmNumeroQualquer
    .then((value)=> {
        console.log(value)
        return value + 10
    })
    .then((value)=> {
        console.log(value) //É possivel manipular a resposta com o uso de outros .then
    })
    .catch((error)=> {
        console.log(error)
    })
    .finally(()=> {
        console.log('finalizou!')
    })