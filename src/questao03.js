import leia from 'readline-sync'

var nota1 = leia.questionFloat("Nota 1: ");
var nota2 = leia.questionFloat("Nota 2: ");
var nota3 = leia.questionFloat("Nota 3: ");
var peso1 = leia.questionFloat("Peso 1: ");
var peso2 = leia.questionFloat("Peso 2: ");
var peso3 = leia.questionFloat("Peso 3: ");

var media1 = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
var media2 = (peso1 + peso2 + peso3);
var media = media1 / media2;

console.log("A média ponderada é de: " + media);