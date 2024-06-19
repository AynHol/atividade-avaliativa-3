import leia from 'readline-sync'

var valor1 = leia.questionInt("Informe o 1 valor: ");
var valor2 = leia.questionInt("Informe o 2 valor: ");
var valor3 = leia.questionInt("Informe o 3 valor: ");

if (valor1 < valor2 + valor3 && valor2 < valor1 + valor3 && valor3 < valor1 + valor2) {
    if (valor1 == valor2 && valor1 == valor3) {
        console.log("O seu triângulo é equilâtero.");
    } else if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3) {
        console.log("O seu triângulo é isósceles.");
    } else {
        console.log("O seu triângulo é escaleno.");
    }
} else {
    console.log("Valores inválidos.");
}