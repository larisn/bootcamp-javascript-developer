/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */


class Carro {
    marca;
    cor;
    gastoCombustivelPorKm;

    constructor (marca, cor, gastoCombustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivelPorKm = gastoCombustivelPorKm;
    }
    
    calcularGasto(distancia, precoCombustivel) {
        return distancia * this.gastoCombustivelPorKm * precoCombustivel;
    }
} 

const m5 = new Carro('BMW', 'Azul', 1 / 6 ); //1km dividido por litro
console.log(m5.calcularGasto(70, 5));

const x6 = new Carro('BMW', 'Branco', 1 / 10);
console.log(x6.calcularGasto(87,3));