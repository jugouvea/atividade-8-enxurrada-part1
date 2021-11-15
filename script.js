let saldo = prompt("Qual o saldo da sua conta?")
let valorcompra = prompt("Qual o valor da sua compra?")
let resultado = saldo - valorcompra;

if (resultado >= 0){
    alert (`sua compra ocorreu corretamente, seu saldo atual é de ${resultado}`);
} else if (resultado <0){
    alert ('saldo insuficiente')
}