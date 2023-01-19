// Desafio de código JavaScript 03
// 3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar esse cálculo receba o valor bruto do salário e o adicional dos beneficios.
// O salário a ser transferido é calculado da seguinte maneira:

// Valor bruto do salário - perentual de imposto mediante a faixa salarial + adiconal dos beneficios

// Para calcular o percentual de imposto segue as aliquotas:

// De R$ 0.00 a R$ 1100.00 = 5.00%
// De R$ 1100.01 a R$ 2500.00 = 10.00%
// Maior que R$ 2500.00 = 15.00%

// Exemplo:
// Entrada: 2000.00 + 250.00
// Saida: 2050.00

const { gets, print } = require('./funcao-auxiliar-des3');
const salarioBase = gets();
const valorBeneficios = gets();

function calcularPercentual (valor, percentual){
    return valor * (percentual / 100)
}

function pegarAliquota (salario){
    if (salario >= 0 && salario <= 1100){
        return 5
    } else if (salario >= 1100.01 && salario <= 2500){
        return 10
    } else {
        return 15
    }
};

const aliquotaImposto = pegarAliquota(salarioBase)
const valorImposto = calcularPercentual(salarioBase, aliquotaImposto)

const salarioLiquido = salarioBase - valorImposto + valorBeneficios

print(salarioLiquido)