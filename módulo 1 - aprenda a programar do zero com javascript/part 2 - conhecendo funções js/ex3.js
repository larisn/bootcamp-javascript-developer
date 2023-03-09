/* Simplificar esse exercício em funções 

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- 1 - À vista Débito, recebe 10% de desconto;
- 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
- 3 - Em duas vezes, preço normal de etiqueta sem juros;
- 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

function aplicarDesconto(valor, desconto) {
    return valor - (valor * desconto / 100); //divide 10 por 100 pra transformar no valor do desconto (0.1)
}

function aplicarJuros(valor, juros) {
    return valor + (valor * juros / 100); //divide 10 por 100 pra transformar no valor do desconto (0.1)
}

let precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10)); //o 10 facilita pro humano escrever, ao inves de 0.1
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10)); 
}




