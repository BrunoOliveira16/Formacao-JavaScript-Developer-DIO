// Filter
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPares = lista.filter((element)=> {
    return (element % 2 === 0)
})

console.log(lista) // Saída: [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(listaDeNumerosPares) // Saída: [ 2, 4, 6, 8, 10 ]