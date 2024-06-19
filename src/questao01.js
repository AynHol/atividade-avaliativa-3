import leia from "readline-sync"

var compra = leia.questionFloat("Qual o valor de compra do produto? ");

if (compra < 20) {
    var final = compra * 1.45;
} else {
    var final = compra * 1.30;
}

console.log("O valor do produto é de " + final + "R$.");