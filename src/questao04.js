import leia from 'readline-sync'

var nota = leia.questionFloat("Informe a nota: ");

if (nota >= 9 && nota < 10) {
    console.log("A sua nota é A");
} else if (nota >= 8 && nota < 9) {
    console.log("A sua nota é B");
} else if (nota >= 7 && nota < 8) {
    console.log("A sua nota é C");
} else if (nota >= 6 && nota < 7) {
    console.log("A sua nota é D");
} else if (nota < 6) {
    console.log("A sua nota é F");
} else {
    console.log("A sua nota é inválida, use de 0 a 10.");
}