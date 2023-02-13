// Orientação a Prototipo
const pessoa = {
    genero: 'Masculino'
}
const bruno = {
    nome: 'Bruno',
    idade: 30,
    __proto__: pessoa //propriedade prototipo
}
console.log(bruno)
console.log(bruno.genero)


console.log("\nFunção Construtora")
// Função construtora
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}
const userBruno = new Pessoa('Bruno', 30)
console.log(userBruno)

console.log("\nOutra forma de chamar a função")
//Outra forma de chamar a função
Pessoa.prototype.falar = function(){
    console.log(`Meu nome é: ${this.nome} e tenho ${this.idade} anos.`)
}
userBruno.falar()


console.log("\nClass Usuario")
// Escrevendo em forma de classe
class Usuario {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar = function(){
        console.log(`Meu nome é: ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const usuarioBruno = new Usuario('Bruno', 30)
usuarioBruno.falar()
console.log(usuarioBruno.nome)
console.log(usuarioBruno.idade)
