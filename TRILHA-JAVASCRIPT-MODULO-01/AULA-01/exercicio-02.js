/*
*   Exercicio 02
*   Formula do IMC: IMC = peso / (altura * altura)
*   IMC em adultos Condição:
*   - Abaixo de 18.5 Abaixo do peso;
*   - Entre 18.5 e 25 Peso normal;
*   - Entre 25 e 30 Acima do peso;
*   - Entre 30 e 40 Obeso;
*   - Acima de 40 Obsesidade Grave;
*/

let peso = 65.5;
let altura = 1.78;
let imc = (peso / Math.pow(altura,2)).toFixed(2); /* Função para calcular ao quadrado (altura * altura) */

if (imc < 18.5) {
    console.log(`O IMC do usuário é ${imc} e ele está abaixo do peso`)
} else if (imc >= 18.5 && imc <= 25){
    console.log(`O IMC do usuário é ${imc} e ele está com peso normal`)
} else if (imc >25 && imc <= 30) {
    console.log(`O IMC do usuário é ${imc} e ele está acima do peso`)
} else if (imc > 30 && imc <= 40) {
    console.log(`O IMC do usuário é ${imc} e ele está obeso`)
} else {
    console.log(`O IMC do usuário é ${imc} e ele está com obesidade grave`)
}
