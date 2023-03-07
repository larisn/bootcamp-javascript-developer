/* faça um programa para calcular o valor de uma viagem.
você terá 3 variáveis, sendo elas:
1 - preço do combustível
2 - valor médio de combustível do carro por km
3 - distância em km da viagem

imprima no console o valor que será gasto de combustível para realizar essa viagem. */

let precoCombustivel = 5.79;
let kmPorLitro = 10;
let distanciaKm = 100;

let litrosConsumidos = distanciaKm / kmPorLitro;
let valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2)); //converte o valor para um texto e deixa a casa em 2 casas decimais, nesse caso


