// foreach
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef)
})

const cb = (value, i, listRef) => {
    console.log(value + i)
}
lista.forEach(cb)