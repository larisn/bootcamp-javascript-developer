
//function declaration, quando sofre hoisting, as declarações vão pra cima

function nomeDaFuncao() {
    console.log('nomeDaFuncao');
}


// function expression, não sofre hoisting

const nomeDeOutraFuncao = function() {
    console.log('nomeDaFuncao');
}

nomeDaFuncao();
nomeDeOutraFuncao();