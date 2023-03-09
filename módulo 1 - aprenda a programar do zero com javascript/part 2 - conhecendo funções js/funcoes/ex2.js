function escrevaMeuNome(nome) {
    return nome;
}

function verificarIdade(idade) {
    if (idade < 18) {
        console.log(escrevaMeuNome('Larissa') + ' é menor de idade.');
    } else {
        console.log(escrevaMeuNome('Larissa') + ' é maior de idade.');
    }
}

verificarIdade(20);