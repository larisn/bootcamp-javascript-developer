/* faça um programa para calcular o valor de uma viagem.
você terá 3 variáveis, sendo elas:
1 - preço do etanol
2 - preço da gasolina
3 - tipo de combustível que está no carro
4 - gasto médio de combustível do carro por km
5 - distância em km da viagem

imprima no console o valor que será gasto para realizar essa viagem. */

let precoEtanol = 2.80
let precoGasolina = 5.08
let tipoCombustivel = 'etanol';
let kmPorLitro = 10;
let distanciaEmKm = 130;
let litrosConsumidos = distanciaEmKm / kmPorLitro; 

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


