
const pessoa = {
    genero: 'feminino'
}

const larissa = {
    nome: 'Larissa',
    idade: 20,
    __proto__: pessoa //direto no objeto
}

/* const larissa = Object.create(pessoa)
larissa.nome = 'Larissa'; */



function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
} 

Pessoa.prototype.falar = function() { 
    console.log(`Meu nome é: ${this.nome}`);
} //como está dentro de um prototipo, ela vai ser executada com base no objeto.

new Pessoa('Larissa', 20);
console.log(larissa);

/* a forma de cima é a mesma que essa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`);
    }
} */


