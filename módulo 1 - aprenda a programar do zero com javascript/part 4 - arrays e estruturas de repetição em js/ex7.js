/* 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota. */


const notas = [3, 6, 8, 10, 7.5, 9, 3, 4.5, 2];
const maiorNota = [10]

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    if (nota === 10) {
        console.log(nota);
    }
} 