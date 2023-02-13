// Utilizando o operador new
function Pessoa(nome,idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
}

const bruno = new Pessoa('Bruno', 30)
bruno.falar() // Saída: Meu nome é: Bruno

//Utilizando o call
const joao = {
    genero: 'masculino'
}
Pessoa.call(joao, 'Joao', 30)
console.log(joao) // Saída: { genero: 'masculino', nome: 'Joao', idade: 30 }

