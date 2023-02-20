# 📌 **Orientação a Protótipo, Funções Construtoras**

## ✅ **Orientação a Protótipo**
Javascript é uma linguagem orientada a objetos prototipica. "A programação baseada em protótipos é um estilo de programação orientada a objetos em que a reutilização de comportamento (conhecida como herança) é realizada por meio de um processo de reutilização de objetos existentes que servem como protótipos."

<br>

> **Protótipos:** São meccanismos pelo qual objetos javaScript herdam recursos uns dos outros.

<br>

## ✅ **Funções Construtoras**
As funções construtoras em JavaScript são como as classes do Java, diferenciando apenas pela sintaxe. Em questão de funcionamento, tanto funções contrutoras no JavaScript quanto Classes no Java têm a mesma utilidade: servir de molde para a criação de objetos.

Para construir objetos, funções construtoras precisam ser instanciadas pelo operador new. O this dentro delas se referencia ao objeto criado a partir delas.

No exemplo abaixo, a função Carro é uma função construtora, e carro1 é um objeto criado a partir do “molde” dessa classe, usando o operador new:

<br>

```
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}
const userBruno = new Pessoa('Bruno', 30)
console.log(userBruno)
```
