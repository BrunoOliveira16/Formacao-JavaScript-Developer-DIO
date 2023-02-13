function adicao(x, y) {
    return x + y
}
function multiplicacao(x, y) {
    return x * y
}

function calcular(x, operacao, y) {
    return (operacao(x, y))
}

console.log(calcular(10, adicao, 20))
console.log(calcular(10, multiplicacao, 20))