
//invocação direta
const pessoa = {
    nome: 'Larissa', 
    idade: 20
}


function gritar(prefixo) {
    console.log(prefixo, this.nome);
}

//apply e call
gritar.apply(pessoa, ['Olá!']);
gritar.call(pessoa, 'Olá!');

