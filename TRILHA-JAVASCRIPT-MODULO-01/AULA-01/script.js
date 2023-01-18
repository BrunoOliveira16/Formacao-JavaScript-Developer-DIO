/* Aula 01 - Variaveis e operadores */

let variável = 10 / 10;
console.log(variável);

/* Faça um programa para calcular o valor gasto de combustivel em uma viagem.

Você terá 3 variáveis. Sendo elas:
- 1 Preço do combustivel;
- 2 Custo médio de combustivel do carro por KM;
- 3 Distância em KM da viagem;

*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKm = 1580;

const litrosConsumidos = distanciaKm / kmPorLitros;
let custoViagem = precoCombustivel * litrosConsumidos;


console.log(custoViagem.toFixed(2));


/* Aula 02 - Estruturas condicionais */
const camisetaAzul = true;
const camisetaVermelha = false;

let numero = 6;
const numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if(numeroPar){
    console.log('Executei')
};

if(numeroPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
};

let num = 2;
const numeroDivisivelPor5 = (num % 5) === 0;

if (num === 0){
    console.log('Numero Inválido')
} else if (numeroDivisivelPor5) {
    console.log('Sim')
} else {
    console.log('Não')
};

/* Faça um programa para calcular o valor gasto de combustivel em uma viagem.

Você terá 5 variáveis. Sendo elas:
- 1 Preço do Etanol;
- 2 Preço da gasolina;
- 3 O tipo de combustivel que está no seu carro;
- 4 Custo médio de combustivel do carro por KM;
- 5 Distância em KM da viagem;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem.

*/

const precoEtanol = 5.79;
const precoGasolina = 6.49
const kmPorLitro = 10
const distanciaKmPercorrido = 100;
const tipoCombustivel = 'Gasolina';

const litroConsumido = distanciaKmPercorrido / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    let valorGasto = precoEtanol * litroConsumido
    console.log(valorGasto.toFixed(2));
} else {
    let valorGasto = precoGasolina * litroConsumido
    console.log(valorGasto.toFixed(2));
}

/* Aula 03 - Praticando com Variáveis, Operadores e Estruturas Condicionais */
/*1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média emtre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/
let nota1 = 7;
let nota2 = 7;
let nota3 = 9;
let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

if (media < 5) {
    console.log(`O aluno teve média ${media} e está reprovado!`)
} else if (media >=5 && media <= 7) {
    console.log(`O aluno teve média ${media} e está em recuperação!`)
} else {
    console.log(`O aluno teve média ${media} e foi aprovado!`)
};


/*
2) O IMC - indice de Massa Corporal é um critério da organização mundial da saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

let peso = 65.5;
let altura = 1.78;
let imc = (peso / Math.pow(altura,2)).toFixed(2); /* Função para calcular ao quadrado (altura * altura) */

if (imc < 18.5) {
    console.log(`O IMC do usuário é ${imc} e ele está abaixo do peso`)
} else if (imc >= 18.5 && imc <= 25){
    console.log(`O IMC do usuário é ${imc} e ele está com peso normal`)
} else if (imc >25 && imc <= 30) {
    console.log(`O IMC do usuário é ${imc} e ele está acima do peso`)
} else if (imc > 30 && imc <= 40) {
    console.log(`O IMC do usuário é ${imc} e ele está obeso`)
} else {
    console.log(`O IMC do usuário é ${imc} e ele está com obesidade grave`)
}

/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/* Tabela de Pagamentos 
1 - Débito
2 - Dinehiro
3 - PIX
4 - Parcelar em 2x
5 - Parcelar acima de 2x
*/


let produto = 100;
let tipoPagamento = 4

if (tipoPagamento === 1) {
    let precoFinal = produto - (produto * 0.1);
    console.log(precoFinal)
} else if (tipoPagamento === 2 | tipoPagamento === 3) {
    let precoFinal = produto - (produto * 0.15);
    console.log(precoFinal)
} else if (tipoPagamento === 4) {
    let precoFinal = produto;
    console.log(precoFinal)
} else if (tipoPagamento === 5){
    let precoFinal = produto + (produto * 0.1);
    console.log(precoFinal)
} else {
    console.log('Valor incorreto para pagamento, por favor selecione 1, 2, 3, 4 ou 5.')
}

/* node ./ORANGE-TECH-MODULO-01/AULA-01/script.js */