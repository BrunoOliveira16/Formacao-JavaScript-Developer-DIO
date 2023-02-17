# 📌 **Aula 03 - Criando objetos e classes em javascript**

<br>

# 📎 **Sumário**
## 📘 **Criando objetos e classes em javascript**
1) Entendendo Objetos e Classes;
2) Praticando com Objetos e Classes;

<br>

## 📄 **1 - Entendendo Objetos e Classes**
### **Objetos**
Objetos em JavaScript, assim como em muitas outras linguagens de programação, podem ser comparados com objetos na vida real. O conceito de objetos em JavaScript pode ser entendido com objetos tangíveis da vida real.

Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

<br>

### **Classes**
Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave class seguida pelo nome da classe (aqui "Retangulo").
```
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
}

```

<br>

## 📄 **2 - Praticando com Objetos e Classes**

<br>

**Exercicio 01:** Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.

Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

<br>

**Exercicio 02:** Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos nome, peso e altura. As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));

Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;