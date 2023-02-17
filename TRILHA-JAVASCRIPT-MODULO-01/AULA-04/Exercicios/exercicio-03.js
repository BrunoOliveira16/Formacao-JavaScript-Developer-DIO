/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "B".*/
const convidados = ['Bruno', 'Bianca', 'Janaina', 'Donato', 'Bernardo', 'Luiza'];

for(let i = 0; i < convidados.length; i++){
    const convidadosB = convidados[i];
    if(convidadosB[0] === 'B'){
        console.log(convidadosB);
    }
}