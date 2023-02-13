
function somar(x) {
    return function(y) {
        return x + y
    }
}
console.log(somar(10)(20)) // Saída: 30

const somaParcial = somar(10)
console.log(somaParcial(20)) // Saída: 30
console.log(somaParcial(30)) // Saída: 40
console.log(somaParcial(40)) // Saída: 50