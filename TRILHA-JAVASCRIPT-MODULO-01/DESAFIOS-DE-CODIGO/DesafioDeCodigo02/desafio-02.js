/* Desafio de código JavaScript 02*/
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior numero par e o menor numero impar.
// Exemplo:
// Entrada: [5, 3, 4, 1, 10, 8]
// saida: Maior n° Par: 10 | Menor n° Impar: 1

const { gets, print } = require('./funcao-auxiliar-des2');
const n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 9999;

for (let i = 0; i < n; i++){
    const numero = gets()

    if(numero % 2 === 0){
        if (maiorNumeroPar === null || numero > maiorNumeroPar){
            maiorNumeroPar = numero
        }
    } else {
        if (menorNumeroImpar === 0 || numero < menorNumeroImpar){
            menorNumeroImpar = numero
        }
    }
}

print(maiorNumeroPar)
print(menorNumeroImpar)
