/* 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5). */


const notas = [3, 6, 8, 10, 7.5, 9, 3, 4.5, 2];

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    if (nota < 5) {
        console.log(nota);
    }
}