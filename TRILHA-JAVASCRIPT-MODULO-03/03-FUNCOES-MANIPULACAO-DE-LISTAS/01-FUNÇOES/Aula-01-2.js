// Declaração Explicita
function somar (a, b) {
    return a + b
}
console.log(somar(2, 2)) // saída: 4

// Arrow Function
const subtrair = (a, b) => {
    return a - b
}
console.log(subtrair(2, 2)) // saída: 0

// Diferença
function funcao1() {
    console.log(this)
}
const funcao2 = () => {
    console.log(this)
}

const bruno = {
    nome: 'Bruno',
    funcao1,
    funcao2
}
bruno.funcao1() // Saída: {nome: 'Bruno',funcao1: [Function: funcao1],funcao2: [Function: funcao2]}
bruno.funcao2() // Saída: {}