/* Desafio de código JavaScript 01*/
// 1) faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

// Exemplo:
// Entrada: 5.5
// Saída: Recuperação

const { gets, print } = require('./funcao-auxiliar-des1');
const media = gets();

if (media < 5) {
    print('Reprovado')
} else if (media >= 5 && media < 7) {
    print('Recuperação')
} else {
    print('Aprovado')
}
