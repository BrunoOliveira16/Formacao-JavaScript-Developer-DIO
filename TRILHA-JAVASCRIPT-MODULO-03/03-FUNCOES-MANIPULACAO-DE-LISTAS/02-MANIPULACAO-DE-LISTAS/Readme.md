# 📌 **Manipulação de Listas**

## 📎 **Sumário**
- Introdução a Manipulação de Listas
- Foreach
- Filter
- Map
- Reduce
- Join e Combinação de Funções de Manipulação

<br>

## ✅ **Introdução a Manipulação de Listas**
Esta é uma parte importante de todas as linguagens de programação. Na maioria das vezes, precisamos realizar várias operações com arrays, motivo de escrevermos este artigo.

abaixo temos alguns dos diversos métodos de manipulação de arrays em JavaScript 

<br>

## ✅ **Foreach**
O método forEach() executa uma dada função em cada elemento de um array.

O forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido. Ele não é invocado para propriedades de índices que foram deletados ou que não foram inicializados (por ex. em arrays esparsos).

callback é invocado com três argumentos:

- valor do elemento
- índice do elemento
- array que está sendo percorrido

```
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef)
})

const cb = (value, i, listRef) => {
    console.log(value + i)
}
lista.forEach(cb)
```

<br>

## ✅ **Filter**
O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou um valor que seja convertido para true. O callback é chamado apenas para índices do array que possuem valores atribuídos; Ele não é invocado para índices que foram excluídos ou para aqueles que não tiveram valor atribuído. Elementos do array que não passaram no teste do callback são simplesmente ignorados, e não são incluídos no novo array.

callback é invocado com estes três argumentos:

- valor do elemento
- índice do elemento
- objeto do array a ser preenchido

```
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPares = lista.filter((element)=> {
    return (element % 2 === 0)
})

console.log(lista) // Saída: [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(listaDeNumerosPares) // Saída: [ 2, 4, 6, 8, 10 ]
```

<br>

## ✅ **Map**
O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.

A função callback é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.
```
class Pessoa {
    constructor(name) {
        this.name = name
    }
}
const lista = [new Pessoa('Bruno'), new Pessoa('Bianca'), new Pessoa('Bernardo'), new Pessoa('Marcelo'), new Pessoa('Pamela'), new Pessoa('Lessandra')]

console.log(lista) 

const listaNomes = lista.map((element) => {
    return element.name
})

console.log(listaNomes) // Saída: [ 'Bruno', 'Bianca', 'Bernardo', 'Marcelo', 'Pamela', 'Lessandra' ]

//Retornando os valores em HTML
const listaEmHtml = lista.map((element) => {
    return `
        <li>${element.name}</li>
    `
})
console.log(listaEmHtml)

/*saída: [
  '\n        <li>Bruno</li>\n    ',
  '\n        <li>Bianca</li>\n    ',
  '\n        <li>Bernardo</li>\n    ',
  '\n        <li>Marcelo</li>\n    ',
  '\n        <li>Pamela</li>\n    ',
  '\n        <li>Lessandra</li>\n    '
]*/
```

<br>

## ✅ **Reduce**
O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

O método reduce() executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:

- Acumulador (acc)
- Valor Atual (cur)
- Index Atual (idx)
- Array original (src)

```
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    return previous + current
}, 0)

console.log(somaDeTodosOsNumeros) //Saída: 55
```

<br>

## ✅ **Join e Combinação de Funções de Manipulação**
O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

Específica uma string para separar cada elemento adjacente do array. O separador é convertido em uma string se necessário. Se omitido, os elementos do array são separados com uma vírgula (","). Se o separador for uma string vazia, todos os elementos são juntados sem nenhum caracter entre eles.

As conversões em string de todos os elementos de um array são juntados em apenas uma string.

```
//Exemplo 01
const lista = [1, 2, 3]
console.log(lista.join('/')) //Saída: 1/2/3


//Exemplo 02
const pessoa = [{ name: 'Bruno' }, { name: 'Bianca' }, { name: 'Bernardo' }]

console.log(pessoa.map((e)=> e.name).join(', ')) //Saída: Bruno, Bianca, Bernardo


//Exemplo 03
const pessoas = [{ name: 'Bruno' }, { name: 'Bianca' }, { name: 'Bernardo' }, {name: 'Marcelo'}, {name: 'Pamela'}, {name: 'Lessandra'}]

console.log(
    pessoas.map((e)=> e.name)
        .filter((e)=> e.startsWith('B'))
        .join('; ')
) //Saída: Bruno; Bianca; Bernardo


//EXemplo 04
const elementosEmHtml = pessoas
    .filter((e)=> e.name.startsWith('B'))
    .map(e => `<li>${e.name}</li>`)
    .join('')
console.log(elementosEmHtml) //Saída: <li>Bruno</li><li>Bianca</li><li>Bernardo</li>
```