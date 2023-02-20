//Método Simples
const user = {
    genero: 'masculino'
}
const bruno = {
    nome: 'Bruno',
    __proto__: user
}
console.log(bruno) // {nome: 'Bruno'}
console.log(bruno.genero) // Saída masculino


//Método Object Create
const pessoa = {
    genero: 'masculino'
}

const joao = Object.create(pessoa)

joao.nome = 'Joao'

console.log(joao) // saída {nome: 'Joao'}
console.log(joao.genero) // Saída masculino