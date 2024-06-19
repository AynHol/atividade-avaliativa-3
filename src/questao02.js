import leia from 'readline-sync'

var qh = leia.questionInt("Quantidade de horas trabalhadas: ");
var vh = leia.questionFloat("Valor da hora trabalhada: ");
var pd = leia.questionInt("Percentual de desconto: ");

var sb = vh * qh;
var des = sb * (pd / 100);
var sl = sb - des;

console.log("O valor bruto é de: " + sb + "R$.");
console.log("O valor de desconto é de: " + des + "R$.");
console.log("O valor do salário líquido é de: " + sl + "R$.");