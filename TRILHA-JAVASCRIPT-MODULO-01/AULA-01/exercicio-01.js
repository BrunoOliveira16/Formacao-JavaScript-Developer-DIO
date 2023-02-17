/*
*   Exercicio 01
*   Média = (nota 1 + nota 2 + nota 3) / 3;
*   Classificação:
*       - Média menor que 5, reprovação;
*       - Média emtre 5 e 7, recuperação;
*       - Média acima de 7, passou de semestre;
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