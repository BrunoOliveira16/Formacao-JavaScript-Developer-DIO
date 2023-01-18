const meuNome = 'Bruno'

for (let i = 0; i < meuNome.length; i++){
    const letra = meuNome[i]
    console.log(letra)
}

/* Exemplo 01*/
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(6);
notas.push(10);

let soma = 0;

for(let i = 0; i < notas.length; i++){
    const nota = notas[i]
    soma = soma + nota;
}
const media = soma / notas.length;
console.log(soma);
console.log(media);

/* Exemplo 02 */
/*1) Crie um programa que dado um número imprima a sua tabuada.*/
let numero = 2;

for(let i = 1; i <= 10; i++){
    console.log(numero * i)
};

/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/
const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < numeros.length; i++){
    const numero = numeros[i];
    if(numero % 2 === 0){
        console.log(numero);
    }
}

/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "B".*/
const convidados = ['Bruno', 'Bianca', 'Janaina', 'Donato', 'Bernardo', 'Luiza'];

for(let i = 0; i < convidados.length; i++){
    const convidadosB = convidados[i];
    if(convidadosB[0] === 'B'){
        console.log(convidadosB);
    }
}

/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;*/
const listaPar = [];

for(let i = 10; i <= 50; i++){
    const numeroParLista = i % 2 === 0;
    if(numeroParLista){
        listaPar.push(i);
    }
}
console.log(listaPar);

/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5). Ex de lista = [2, 7, 3, 8, 10, 4]*/
const listaNotas = [2, 7, 3, 8, 10, 4];

for(let i = 0; i < listaNotas.length; i++){
    const listaNota = listaNotas[i];
    if (listaNota < 5){
        console.log(listaNota);
    }
}

/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/
const notasAlunos = [2, 7, 3, 8, 10, 4];

for (let i = 0; i < notasAlunos.length; i++){
    const notaAluno = notasAlunos[i];
    if (notaAluno >= 10){
        console.log(notaAluno)
    }
}








/*Exemplo Numeros Pares
const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}
console.log(numerosPares);*/

