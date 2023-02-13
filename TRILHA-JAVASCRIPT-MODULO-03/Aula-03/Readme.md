## 📌 **Aula 03 - Funções e Manipulação de Listas com JavaScript**

## 📎 **Sumário**
### **Aula 01 - Funções**
- **Aula 01.1: First Class Functions, Higher Order Functions, Function Declaration e Function Expression**
- **Aula 01.2: Declaração Explícita e Arrow Function**
- **Aula 01.3: Closures ou Fechamentos**
- **Aula 01.4: Invocação Direta, Call, Apply e Operador New**
- **Aula 01.5: Menção Honrosa aos Callbacks**

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