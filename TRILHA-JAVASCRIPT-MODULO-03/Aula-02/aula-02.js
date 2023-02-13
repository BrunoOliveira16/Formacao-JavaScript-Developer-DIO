// Sobescrita e Shadowing
const pessoa = {
    idade: 18
}

const joao = {
    nome: 'João',
    idade: 30,
    __proto__: pessoa
}
//A busca consiste em ele procurar o valor idade,s e não achar ele busca no prototipo o valor default de 18
console.log(joao.idade)