// Invocação Direta

function teste () {
    console.log('Teste')
}
teste()

// 

// apply e call
const pessoa = {
    nome: 'Bruno',
    idade: 30
}

function falar(prefixo) {
    console.log(prefixo, this.nome)
}

falar.apply(pessoa, ['Olá meu nome é'])
falar.call(pessoa, 'Olá meu nome é')

// Operador new
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}
const userBruno = new Pessoa('Bruno', 30)

console.log(userBruno)