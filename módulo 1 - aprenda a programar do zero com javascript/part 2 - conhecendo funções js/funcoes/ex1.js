/* Simplificar esse exercício em funções

let altura = 1.55;
let peso = 55;
const IMC = peso / (altura * altura);
console.log(IMC);

if(IMC < 18.5) {
    console.log('Abaixo do peso.');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso normal.');
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do peso.');
} else if (IMC >= 30 && IMC < 40) {
    console.log('Obesidade.');
} else {
    console.log('Obesidade grave.');
} */


function calcularIMC(peso, altura) {
    return peso / (altura * altura); 
}

function classificarIMC(IMC) {
    if(IMC < 18.5) {
        return 'Abaixo do peso.';
    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Peso normal.';
    } else if (IMC >= 25 && IMC < 30) {
        return 'Acima do peso.';
    } else if (IMC >= 30 && IMC < 40) {
        return 'Obesidade.';
    } else {
        return'Obesidade grave.';
    } 
}

(function () {
    let altura = 1.55;
    let peso = 55;
    const IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC));
})() // função imediatamente invocada



