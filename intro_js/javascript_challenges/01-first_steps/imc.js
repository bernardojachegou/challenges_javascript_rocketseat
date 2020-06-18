// Cálculo de IMC
// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
// imc o cálculo do índice de massa corporal definido pela fórmula abaixo:
// peso / (altura * altura);
// Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:
// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;

const name = "Michel";
const weight  = 80;
const height = 1.71;

const bmi = weight / (height * height);

if (bmi >= 30) {
    console.log(`${name} your bmi is ${bmi.toFixed(2)}, you are overweight.`);
} else {
    console.log(`${name} your bmi is ${bmi.toFixed(2)}, you aren't overweight.`);
}
