
function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {;
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`); 
    }
}

const larissa = new Pessoa('Larissa', 20);
const manuela = new Pessoa('Manuela', 6);

compararPessoas(larissa, manuela);