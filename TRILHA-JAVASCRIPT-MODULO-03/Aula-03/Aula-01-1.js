//First Class Functions
function falarMeuNome() {
    console.log('Meu nome é Bruno')
}

const referenciaNova = falarMeuNome
referenciaNova()

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Oliveira')
}
falarMeuNomeCompleto(falarMeuNome)

// Atribuir uma função a uma variável
const meuNome = function() {
    console.log("Bruno")
}
meuNome()

//function declaration
function nomeDaFuncao() {
    console.log('function declaration')
}

//function expression
const nomeDaOutraFuncao = function() {
    console.log('function expression')
}

nomeDaFuncao()
nomeDaOutraFuncao()

// Higher Order Functions
const manipulandoArray = (arr, instrucao) => {
    const resultado = []
    for(let i = 0; i < arr.length; i++) {
        resultado.push(instrucao(arr[i]))
    }
    return resultado
}

const divisaoDoArrayPor2 = manipulandoArray(
    [2, 4, 6, 8, 10],
    (input) => input / 2
)
console.log(divisaoDoArrayPor2) // Saída: [ 1, 2, 3, 4, 5 ]