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
var continuar = "s"
var resultados = []
var index = 0
console.log("Os números inseridos foram: " + numeroA + " e " + numeroB)
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
    var divisao = numeroA / numeroB
    return divisao
}
function ExibirHistorico() {
    console.log(resultados)
}
while(continuar == "s"){
    var operacao = prompt("1 Para somar, 2 Para subtrair, 3 Para Multiplicar, 4 Para dividir.")
    if (operacao == "1") {
        resultados[index] = Somar(numeroA, numeroB)
        index++
        console.log(Somar(numeroA,numeroB))
    }else if(operacao == "2"){
        resultados[index] = Subtrair(numeroA, numeroB)
        index++
        console.log(Subtrair(numeroA, numeroB))
    }else if (operacao == 3) {
        resultados[index] = Multiplicar(numeroA, numeroB)
        index++
        console.log(Multiplicar(numeroA, numeroB))
    }else{
        resultados[index] = Dividir(numeroA, numeroB)
        index++
        console.log(Dividir(numeroA, numeroB))
    }
    continuar = prompt("Deseja continuar? s ou n")
}
ExibirHistorico();