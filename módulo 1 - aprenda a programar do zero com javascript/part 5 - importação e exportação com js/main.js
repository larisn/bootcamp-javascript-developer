
/* const {gets, print} = require('./funcoes-auxiliares'); // importar o que está sendo exportando pelo outro arquivo / fazendo o destruction {}

const pessoa = { // construimos um objeto
    nome: 'Larissa'
}

const { nome } = pessoa; //podemos destruir esse objeto, é a mesma coisa que ''const nome = pessoa.nome;''

print(gets()); */


const {gets, print} = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }

}

print(maiorValorEncontrado);