function Pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`);
}
 
/* console.log(new Pessoa('larissa', 30));
larissa.falar(); */

const larissa = {
    genero: 'feminino'
}

Pessoa.call(larissa, 'nome', 20); // pode ser passado o contexto para ser invocado essa função

console.log(larissa);

// esse objeto vai ser chamado como this da função Pessoa, então durante a execução dela, o this estará apontando pra essa função .call.