/*
*   1) Crie uma classe para representar carros. 
*   Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
*   Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
*   gasto em reais para realizar este percurso.
*/


class Carro {
    marca;
    cor;
    gastoMedioCombustivel;
    kilometragem;

    constructor(marca, cor, gastoMedioCombustivel, kilometragem){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
        this.kilometragem = kilometragem;
    }
    CalcularCustoPercurso(distanciaKm, precoCombustivel){
        return (distanciaKm * this.gastoMedioCombustivel * precoCombustivel).toFixed(2);
    }
}

const onix = new Carro('GM', 'Preto', 1/15.3, 36000);
onix.CalcularCustoPercurso(100, 6.05);

const palio = new Carro('Fiat', 'Branco', 1/18.5, 50000);
palio.CalcularCustoPercurso(100, 6.05);


console.log(onix)
console.log(onix.CalcularCustoPercurso(100, 5.65))

console.log(palio)
console.log(palio.CalcularCustoPercurso(100, 5.65))