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

/*Exemplo Numeros Pares*/
const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}
console.log(numerosPares);

