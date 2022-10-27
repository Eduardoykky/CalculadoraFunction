/*
1. Você deve criar um programa que solicite ao seu usuário dois
números A e B.
2. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma soma com eles, e retorne o resultado;
3. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma subtração com eles, e retorne o resultado;
4. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma multiplicação com eles, e retorne o
resultado;
5. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma divisão com eles, e retorne o resultado;
6. Faça com que seu usuário escolha qual função ele deseja fazer
com os números que ele inseriu, e depois de realizar essa
operação pergunte se ele deseja fazer outra ou encerrar a
aplicação.
7. Crie um array para salvar o resultado das operações e crie
também uma função para exibir o histórico dos resultados.

*/
var numeroA = parseInt(prompt("Insira um número"))
var numeroB = parseInt(prompt("Insira um número"))

function Somar(numeroA, numeroB){
    var somar = numeroA + numeroB
    return somar
}
function Subtrair(numeroA, numeroB){
    var subtracao = numeroA - numeroB
    return subtracao
}
function Multiplicar(numeroA, numeroB){
    var multiplica = numeroA * numeroB
    return multiplica
}
function Dividir(){
    console.log(numero1 / numero2)
    
}