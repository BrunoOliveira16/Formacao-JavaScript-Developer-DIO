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
