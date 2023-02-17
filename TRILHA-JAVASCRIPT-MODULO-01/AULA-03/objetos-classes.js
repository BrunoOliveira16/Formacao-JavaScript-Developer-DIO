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

/* Exemplo */

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