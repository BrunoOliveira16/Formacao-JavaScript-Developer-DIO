const { gets, print } = require('./funcoes-auxiliares.js');

/*
1) Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 -100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98
*/
const quantidadeAlunos = gets();
let  maiorValor = 0;

for(i = 0; i < quantidadeAlunos; i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);



/* OUTRA SOLUÇÃO
const numerosSorteados = [];

for(i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let  maiorValor = 0;

for(let i = 0; i < numerosSorteados.length; i++){
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);
*/