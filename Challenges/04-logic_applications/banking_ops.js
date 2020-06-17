// Adicionar transações
// Crie uma função createTransaction para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um
// objeto de transação que tem o seguinte formato:
// {
//     type: 'credit',
//         value: 50.5
// }
// O type pode ser credit para créditos e debit para débitos da conta do usuário.
// Quanto uma transação for do tipo credit ela deve também somar o valor do crédito no saldo(balance) do usuário.
// Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo(balance) do usuário.

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === "credit") {
        user.balance = user.balance + transaction.value;
    } else {
        user.balance = user.balance - transaction.value;
    }
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 80 });
createTransaction({ type: "debit", value: 70 });

//Relatórios
// Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da 
// transação de maior valor com aquele tipo:
// getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }

function getHigherTransactionByType(type) {
    let highValue = 0;

    for (let transaction of user.transactions) {
        if (transaction.type === type && transaction.value > highValue) {
            highValue = transaction.value;
        }
    }
    return highValue;
}

console.log(getHigherTransactionByType("debit"));

// Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:
// getAverageTransactionValue(); // 83.3

function getAverageTransactionValue() {
    let average = 0;
    for (let transaction of user.transactions) {
        average = average + transaction.value;
    }
    return average / user.transactions.length;
}

console.log(getAverageTransactionValue());

// Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, o retorno da função deve ser um objeto e seguir exatamente 
// como o modelo apresentado abaixo:
// getTransactionsCount(); // { credit: 5, debit: 3 }

function getTransactionsCount() {
    let counter = {
        credit: 0,
        debit: 0
    }

    for (let transaction of user.transactions) {
        if (transaction.type == "credit") {
            counter.credit++;
        } else {
            counter.debit++;
        }
    }
    return counter;
}

console.log(getTransactionsCount());