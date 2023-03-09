
// padrao

function funcao1 () {
    console.log(this);
}



//arrow function (função anônima) - não possui contexto, não tem o this 

const funcao2 = () => {
    console.log(this);
}


const larissa = {
    nome: 'Larissa',
    funcao1,
    funcao2
}

larissa.funcao1();
larissa.funcao2();