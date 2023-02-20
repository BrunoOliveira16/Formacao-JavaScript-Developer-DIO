# 📌 **Formas de criação de objetos literais com Protótipos**

### ✅ **Forma Simples**
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
<br>

### ✅ **Através do método Object.create**
```
const pessoa = {
    genero: 'masculino'
}

const joao = Object.create(pessoa)

joao.nome = 'Joao'

console.log(joao) // saída {nome: 'Joao'}
console.log(joao.genero) // Saída masculino

```