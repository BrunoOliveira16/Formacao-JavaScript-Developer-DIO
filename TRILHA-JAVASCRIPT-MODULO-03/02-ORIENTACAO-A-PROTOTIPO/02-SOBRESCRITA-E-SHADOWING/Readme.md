# 📌 **Entendendo Sobrescrita e Shadowing**

## ✅ **Sobrescrita**
Na Sobrescrita basta que a propriedade mais próxima dentro da cadeia de protótipos esteja declarada, que ele irá devolver ela.

### **Exemplo:**
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