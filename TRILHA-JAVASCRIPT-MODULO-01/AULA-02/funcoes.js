/* Aula 01 - O poder das funções na qualidade do seu código */
/*Exemplo 01*/
function teste(){
    console.log('Testando');
}
teste();

/*Exemplo 02*/
function sayMyName(name){
    console.log(`Your name is: ${name}`);
}
sayMyName('Bruno');

/*Exemplo 03*/
function quadrado(valor){
    return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

/*Exemplo 04*/
function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));

/*Exemplo 05*/
/*function calcularImc(peso, altura){
    return (peso / Math.pow(altura, 2)).toFixed(2);
}*/
const calcularImc = (peso, altura)=>{
    return (peso / Math.pow(altura, 2)).toFixed(2);
}
function classificarImc(imc){
    if(imc<18.5){
        return 'Abaixo do peso';
    } else if(imc>=18.5 && imc<25){
        return 'Peso normal';
    } else if(imc>=25 && imc<30){
        return 'Acima do Peso';
    } else if(imc>=30 && imc<40){
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}
function main(){
    let peso = 66;
    let altura = 1.78;

    const imc = calcularImc(peso, altura);
    const classificacaoIMC = classificarImc(imc);

    console.log(`O IMC do individuo é ${imc} e sua classificação é ${classificacaoIMC}`);
};
main();

/*Funcção auto invocante*/
(function main(){
    let peso = 66;
    let altura = 1.78;

    const imc = calcularImc(peso, altura);
    const classificacaoIMC = classificarImc(imc);

    console.log(`O IMC do individuo é ${imc} e sua classificação é ${classificacaoIMC}`);
})();

/* Aula 02 - Praticando com Funções */
/* Pratica 01 */
function verificarMaiorIdade(idade){
    if (idade >= 18){
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}
let userName = 'Bruno'
let idade = 22
const verificarStatusIdade = verificarMaiorIdade(idade)

console.log(`O usuário ${userName} tem o status ${verificarStatusIdade}`)

/* Pratica 02 */
function aplicarDesconto(valor, desconto){
    return (valor - ((valor * desconto) / 100));
}
function aplicarjuros(valor, desconto){
    return (valor + ((valor * desconto) / 100));
}

function classificarDesconto(){
    if(formaPagamento === 1){
        return aplicarDesconto(valor, 10)
    } else if(formaPagamento === 2 | formaPagamento === 3){
        return aplicarDesconto(valor, 15)
    } else if(formaPagamento === 4){
        return aplicarDesconto(valor, 0)
    } else if(formaPagamento === 5){
        return aplicarjuros(valor, -10)
    } else {
        return 'Favor digitar uma das opções válidas'
    }
}
let valor = 100;
let formaPagamento = 5;
console.log(classificarDesconto())
console.log(`O seu valor final será de R$ ${classificarDesconto()}`)


function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    return media
}

console.log(calcularMedia(5, 5));