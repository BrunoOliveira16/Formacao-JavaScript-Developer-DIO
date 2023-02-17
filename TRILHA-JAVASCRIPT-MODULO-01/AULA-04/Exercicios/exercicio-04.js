/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;*/
const listaPar = [];

for(let i = 10; i <= 50; i++){
    const numeroParLista = i % 2 === 0;
    if(numeroParLista){
        listaPar.push(i);
    }
}
console.log(listaPar);