## 📌 **Aula 02 - Orientação a Protótipo**

## 📎 **Sumário**
- **Aula 01:** Orientação a Protótipo, Funções Construtoras
- **Aula 02:** Entendendo Sobrescrita e Shadowing
- **Aula 03:** Formas de criação de objetos literais com Protótipos
- **Aula 04:** Entendendo melhor o operador New e Brincando com Protótipos

<br>

## 📘 **Aula 01: Orientação a Protótipo, Funções Construtoras**
### 📄 **Orientação a Protótipo**
Javascript é uma linguagem orientada a objetos prototipica. "A programação baseada em protótipos é um estilo de programação orientada a objetos em que a reutilização de comportamento (conhecida como herança) é realizada por meio de um processo de reutilização de objetos existentes que servem como protótipos."

**Protótipos:** São meccanismos pelo qual objetos javaScript herdam recursos uns dos outros.

<br>

### 📄 **Funções Construtoras**
As funções construtoras em JavaScript são como as classes do Java, diferenciando apenas pela sintaxe. Em questão de funcionamento, tanto funções contrutoras no JavaScript quanto Classes no Java têm a mesma utilidade: servir de molde para a criação de objetos.

Para construir objetos, funções construtoras precisam ser instanciadas pelo operador new. O this dentro delas se referencia ao objeto criado a partir delas.

No exemplo abaixo, a função Carro é uma função construtora, e carro1 é um objeto criado a partir do “molde” dessa classe, usando o operador new:

```
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}
const userBruno = new Pessoa('Bruno', 30)
console.log(userBruno)
```

<br>

## 📘 **Aula 02: Entendendo Sobrescrita e Shadowing**
### 📄 **Sobrescrita**
Na Sobrescrita basta que a propriedade mais próxima dentro da cadeia de protótipos esteja declarada, que ele irá devolver ela.

Exemplo:
```
//Propriedade fora da const joao
const pessoa = {
    idade: 18
}
const joao = {
    nome: 'João',
    __proto__: pessoa
}
console.log(joao.idade)
//Saída 18


// propriedade dentro de const joao
const pessoa = {
    idade: 18
}
const joao = {
    nome: 'João',
    idade: 30,
    __proto__: pessoa
}
console.log(joao.idade)
//Saída 30
```

<br>

## 📘 **Aula 03: Formas de criação de objetos literais com Protótipos**
### 📄 **Forma Simples**
```
const pessoa = {
    genero: 'masculino'
}
const joao = {
    nome: 'João',
    __proto__: pessoa
}
console.log(joao) // {nome: 'Joao'}
console.log(joao.genero) // Saída masculino

```

### 📄 **Através do método Object.create**
```
const pessoa = {
    genero: 'masculino'
}

const joao = Object.create(pessoa)

joao.nome = 'Joao'

console.log(joao) // saída {nome: 'Joao'}
console.log(joao.genero) // Saída masculino

```

<br>

## 📘 **Aula 04: Entendendo melhor o operador New e Brincando com Protótipos**
### 📄 **Utilizando o operador new**
```
function Pessoa(nome,idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
}

const bruno = new Pessoa('Bruno', 30)
bruno.falar() // Saída: Meu nome é: Bruno
```

<br>

### 📄 **Utilizando o método call**
```
function Pessoa(nome,idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
}

const joao = {
    genero: 'masculino'
}
Pessoa.call(joao, 'Joao', 30)
console.log(joao) // Saída: { genero: 'masculino', nome: 'Joao', idade: 30 }
```
