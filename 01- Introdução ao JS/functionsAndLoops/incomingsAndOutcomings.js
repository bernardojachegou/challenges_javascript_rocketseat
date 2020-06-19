// Soma de despesas e receitas
// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).
// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:
// function calculaSaldo(receitas, despesas) {}
// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:
// function somaNumeros(numeros) { Soma todos números dentro do array "numeros" }
// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.
// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:
// Fulano possui saldo POSITIVO de 43.3
// Sicrano possui saldo NEGATIVO de -90.3


const users = [
    {
        name: "Salvio",
        incomes: [115.3, 48.7, 98.3, 14.5],
        outcomes: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        incomes: [24.6, 214.3, 45.3],
        outcomes: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        incomes: [9.8, 120.3, 340.2, 45.3],
        outcomes: [450.2, 29.9]
    }
];

function sumNumbers(numbers) {
    let totalSum = 0;
    for (let number of numbers) {
        totalSum += number;
    }
    return totalSum;
}

function calculateBalance(incomes, outcomes) {
    totalIncomes = sumNumbers(incomes);
    totalOutcomes = sumNumbers(outcomes);

    return totalIncomes - totalOutcomes;
}

for (let user of users) {
    const balance = calculateBalance(user.incomes, user.outcomes);

    if (balance > 0) {
        console.log(`${user.name} has a POSITIVE balance of ${balance.toFixed(2)}`);
    } else {
        console.log(`${user.name} has a NEGATIVE balance of ${balance.toFixed(2)}`);
    };
};
