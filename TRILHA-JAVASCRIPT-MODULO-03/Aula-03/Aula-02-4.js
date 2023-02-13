//Map
class Pessoa {
    constructor(name) {
        this.name = name
    }
}
const lista = [new Pessoa('Bruno'), new Pessoa('Bianca'), new Pessoa('Bernardo'), new Pessoa('Marcelo'), new Pessoa('Pamela'), new Pessoa('Lessandra')]

console.log(lista) // Saída: [Pessoa { name: 'Bruno' }, Pessoa { name: 'Bianca' }, Pessoa { name: 'Bernardo' }, Pessoa { name: 'Marcelo' }, Pessoa { name: 'Pamela' }, Pessoa { name: 'Lessandra'}]

const listaNomes = lista.map((element) => {
    return element.name
})
console.log(listaNomes) // Saída: [ 'Bruno', 'Bianca', 'Bernardo', 'Marcelo', 'Pamela', 'Lessandra' ]

//Retornando os valores em HTML
const listaEmHtml = lista.map((element) => {
    return `
        <li>${element.name}</li>
    `
})
console.log(listaEmHtml)