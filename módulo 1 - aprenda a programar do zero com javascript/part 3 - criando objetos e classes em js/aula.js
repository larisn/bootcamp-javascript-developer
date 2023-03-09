
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    } //isso obriga que sempre que uma pessoa for instanciada, ele peça nome e idade.

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const larissa = new Pessoa('Larissa', 19);

console.log(larissa);



// formas de acessar os valores

//mais dinamico
pessoa['nome'] = 'teste'; //pra codificar não é preciso ter saber o valor da variável, é uma string que pode ser recebida como parâmetro, vir de outro lugar, etc

//não dinamico - acesso direto
pessoa.nome = 'teste'; //pra codificar é preciso saber o valor da variável nome.


