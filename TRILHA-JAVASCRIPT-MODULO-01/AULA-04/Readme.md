# 📌 **Aula 04 - Arrays e estruturas de repetição em javascript**

<br>

# 📎 **Sumário**
## 📘 **Arrays e Estruturas de Repetição**
1) Arrays e Estruturas de Repetição;
2) Praticando Estruturas de Repetição;

<br>

## 📄 **1 - Arrays e Estruturas de Repetição**
### **Arrays**
Arrays são geralmente descritas como "lista de objetos"; elas são basicamente objetos que contem múltiplos valores armazenados em uma lista. Um objeto array pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor, a diferença está em podermos acessar cada valor dentro da lista individualmente, e fazer super úteis e eficientes coisas com a lista, como laço através da lista e fazer a mesma coisa para cada valor. Talvez nós pegamos uma série de produtos e seus preços armazenados em uma array, e nós queremos fazer um laço através de todos eles e mostrar em um recibo, enquanto somamos todos os preços e mostramos o preço total ao final.

Se nós não tivessemos arrays, teríamos que armazenar cada item em uma variável separada, então chamar o código para mostrar e adicionar separadamente cada item. Isto seria muito mais longo de escrever, menos eficiente e mais suscetível a erros. Se nós temos 10 itens para adicionar na fatura, isto é ruim o bastante, mas e se fosse 100 itens ou 1000?

<br>

### **Estruturas de Repetição**
Você pode pensar em um laço de repetição como um jogo onde você manda o seu personagem andar X passos em uma direção e Y passos em outra; por exemplo, a ideia "vá 5 passos para leste" pode ser expressa em um laço desta forma:
```
var passo;
for (passo = 0; passo < 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 0 a 4.
  console.log('Ande um passo para o leste');
}

```
Existem várias formas diferentes de laços, mas eles essencialmente fazem a mesma coisa: repetir uma ação múltiplas vezes ( inclusive você poderá repetir 0 vezes). Os vários mecanismos diferentes de laços oferecem diferentes formas de determinar quando este irá começar ou terminar. Há várias situações em que é mais fácil resolver um problema utilizando um determinado tipo de laço do que outros.

Os possíveis laços de repetição em JavaScript:

- for_statement
- do...while_statement
- while_statement
- label_statement
- break_statement
- continue_statement
- for...in_statement
- for...of_statement

<br>

## 📄 **2 - Praticando Estruturas de Repetição**

<br>

**Exercicio 01:** Crie um programa que dado um número imprima a sua tabuada.

<br>

**Exercicio 02:** Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

<br>

**Exercicio 03:** Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

<br>

**Exercicio 04:** Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

<br>

**Exercicio 05:** Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]

<br>

**Exercicio 06:** Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]