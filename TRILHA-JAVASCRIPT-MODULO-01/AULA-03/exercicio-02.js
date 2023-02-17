/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class People {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC(){
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }
    classificarIMC(){
        const imc = this.calcularIMC();
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
}

const jose = new People('Jose', 70, 1.75);
console.log(jose)
console.log(`O usuário ${jose.nome} possui o IMC ${jose.calcularIMC()} e sua classificação é ${jose.classificarIMC()}`)
