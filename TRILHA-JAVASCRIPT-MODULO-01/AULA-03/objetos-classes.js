/* Aula 01 - Objetos e classes */
const bruno = {
    nome: 'Bruno Oliveira',
    idade: 35,
    profissao: 'Dev Full-Stack',

    descrever: function(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}, minha profissão é ${this.profissao} e meu estado civil é de ${this.status}.`)
    },
};

bruno.status = 'casado'

console.log(bruno.nome);
console.log(bruno.profissao);
bruno.descrever();

/*Classe*/
class Pessoa {
    nome;
    idade;
    profissao;
    status;

    descrever(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}, minha profissão é ${this.profissao} e meu estado civil é de ${this.status}.`)
    }
}

const bruno1 = new Pessoa();
bruno1.nome = 'Bruno Oliveira'
bruno1.idade = 35
bruno1.profissao = 'Dev Full-Stack'
bruno1.status = 'Casado'
console.log(bruno1)
bruno1.descrever();

const bianca = new Pessoa();
bianca.nome = 'Bianca Cristine'
bianca.idade = 30
bianca.profissao = 'Contadora'
bianca.status = 'Casada'
console.log(bianca)
bianca.descrever();

/*Constructor*/

class Usuario {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade
    }
    bio(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e meu ano de nascimento é ${this.anoNascimento}`);
    }
}
function compararUsuarios(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`);
    }
}
const user1 = new Usuario('Bruno', 35);
const user2 = new Usuario('Bianca', 30);

user1.bio();
user2.bio();
compararUsuarios(user1, user2);

/*Exercicio*/
/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
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

const jose = new People('Jose', 68.5, 1.78);
console.log(jose)
console.log(`O usuário ${jose.nome} possui o IMC ${jose.calcularIMC()} e sua classificação é ${jose.classificarIMC()}`)



class Pes {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pes) {
    console.log(`Nome: ${pes.nome}; Idade: ${pes.idade};`);
}

const renan = new Pes('Renan', 30);
console.log(descreverPessoa(renan));


class Pe {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new Pe('Renan', 30).descrever();