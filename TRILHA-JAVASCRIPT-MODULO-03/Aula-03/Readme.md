## 📌 **Aula 03 - Funções e Manipulação de Listas com JavaScript**

## 📎 **Sumário**
### **Aula 01 - Funções**
- **Aula 01.1: First Class Functions, Higher Order Functions, Function Declaration e Function Expression**
- **Aula 01.2: Declaração Explícita e Arrow Function**
- **Aula 01.3: Closures ou Fechamentos**
- **Aula 01.4: Invocação Direta, Call, Apply e Operador New**
- **Aula 01.5: Menção Honrosa aos Callbacks**
### **Aula 02 - Manipulação de Listas**
- **Aula 02.1: Introdução a Manipulação de Listas**
- **Aula 02.2: Foreach**
- **Aula 02.3: Filter**
- **Aula 02.4: Map**
- **Aula 02.5: Reduce**
- **Aula 02.6: Join e Combinação de Funções de Manipulação**

<br>

## 📘 **Aula 01.1: First Class Functions, Higher Order Functions, Function Declaration e Function Expression**
### 📄 **First Class Functions**
Entenda-se que uma linguagem de programação tem Function First-class quando as funções são tratadas como qualquer outra variável. Por exemplo, numa linguagem desse tipo, a função pode ser passada como argumento pra outras funções, ser retornada por outra função e pode ser atribuída como um valor a uma variável.

### Exemplo | Atribuir uma função a uma variável
```
const meuNome = function() {
    console.log("Bruno")
}

// Chamando a função utilizando a variável
meuNome() //Saída: Bruno
```

### Exemplo | Passar uma função como um argumento
```
function falarMeuNome() {
    console.log('Meu nome é Bruno')
}

// Passa `falarMeuNome` como argumento para função `falarMeuNomeCompleto`
function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Oliveira')
}
falarMeuNomeCompleto(falarMeuNome) //Saída: Meu nome é Bruno Oliveira
```

<br>

### 📄 **Higher Order Functions**
Uma função de ordem superior, ou higher order function (HOF), como vamos chama-la, é uma função que recebe como argumento, ou retorna uma função. Isso é possível porque em Javascript, funções são entidades de primeira classe, ou seja, é possível passar elas como argumentos para uma outra função.
```
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
```

<br>

### 📄 **Function Declaration**
```
function nomeDaFuncao() {
    console.log('function declaration')
}

nomeDaFuncao() //Saída: function declaration
```

<br>

### 📄 **Function Expression**
```
const nomeDaOutraFuncao = function() {
    console.log('function expression')
}

nomeDaOutraFuncao() //Saída: function expression 
```

<br>

## 📘 **Aula 01.2: Declaração Explícita e Arrow Function**
### 📄 **Declaração Explícita**
```
function somar (a, b) {
    return a + b
}
console.log(somar(2, 2)) // saída: 4
```

<br>

### 📄 **Arrow Function**
```
const subtrair = (a, b) => {
    return a - b
}
console.log(subtrair(2, 2)) // saída: 0
```
<br>

### 📄 **Diferença**
A Função explicita isola o contexto e a arrow function não faz isso perdendo o contexto do `this` como pode ser observado abaixo:

```
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
```

<br>

## 📘 **Aula 01.3: Closures ou Fechamentos**
Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

*É a capacidade que a função tem de se lembrar do contexto onde foi criado a função*

```
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
```

<br>

## 📘 **Aula 01.4: Invocação Direta, Call, Apply e Operador New**
### 📄 **Invocação Direta**
```
function teste () {
    console.log('Teste')
}
teste() // Saída: Teste
```

<br>

### 📄 **Call**
```
const pessoa = {
    nome: 'Bruno',
    idade: 30
}

function falar(prefixo) {
    console.log(prefixo, this.nome)
}

falar.call(pessoa, 'Olá meu nome é') // Saída: Olá meu nome é Bruno
```

<br>

### 📄 **Apply**
```
const pessoa = {
    nome: 'Bruno',
    idade: 30
}

function falar(prefixo) {
    console.log(prefixo, this.nome)
}

falar.apply(pessoa, ['Olá meu nome é']) // Saída: Olá meu nome é Bruno
```

<br>

### 📄 **Operador new**
```
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}
const userBruno = new Pessoa('Bruno', 30)

console.log(userBruno) // Saída: Pessoa { nome: 'Bruno', idade: 30 }
```

<br>

## 📘 **Aula 01.5: Menção Honrosa aos Callbacks**
Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

Aqui está um pequeno exemplo:
```
function adicao(x, y) {
    return x + y
}
function multiplicacao(x, y) {
    return x * y
}

function calcular(x, operacao, y) {
    return (operacao(x, y))
}

console.log(calcular(10, adicao, 20)) // Saída: 30
console.log(calcular(10, multiplicacao, 20)) // Saída: 200
```

<br>

## 📘 **Aula 02.1: Introdução a Manipulação de Listas**
Esta é uma parte importante de todas as linguagens de programação. Na maioria das vezes, precisamos realizar várias operações com arrays, motivo de escrevermos este artigo.

abaixo temos alguns dos diversos métodos de manipulação de arrays em JavaScript 

<br>

## 📘 **Aula 02.2: Foreach**
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

## 📘 **Aula 02.3: Filter**
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

## 📘 **Aula 02.4: Map**
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

## 📘 **Aula 02.5: Reduce**
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

## 📘 **Aula 02.6: Join e Combinação de Funções de Manipulação**
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