//  Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < listaNumeros.length; i++) {
    const numeros = listaNumeros[i]; //numeros[i] significa a posição que está sendo avaliada
    if (numeros % 2 === 0) {
        console.log(numeros);
    }
} 


