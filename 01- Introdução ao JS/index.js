// function calculaImc(nome, peso, altura) {
//     const imc = peso / (altura * altura);
//     if (imc >= 30) {
//         console.log(`${nome} seu imc é ${imc.toFixed(2)}, você está acima do peso`);
//     } else {
//         console.log(`${nome} seu imc é ${imc.toFixed(2)}, você não está acima do peso`);
//     }
// }

// calculaImc("Michel", 84, 1.71);

// function verificaAposentadoria(nome, sexo, idade, contribuicao) {
//     const homemAposenta = sexo == ("M") && idade + contribuicao >= 95;
//     const mulherAposenta = sexo == ("F") && idade + contribuicao >= 85;

//     if (homemAposenta || mulherAposenta) {
//         console.log(`${nome}, você pode se aposentar!`);
//     } else {
//         console.log(`${nome}, você não pode se aposentar!`)
//     }
// }

// verificaAposentadoria("Michel", "M", 29, 10);

// const rocketseat = {
//     nome: "Rocketseat",
//     cor: "Roxo",
//     foco: "Programação",
//     endereco: {
//         rua: "Rua Guilherme Gembala",
//         numero: 260
//     }
// }

// function imprimeDadosEmpresa(objeto) {
//     console.log(`A empresa ${objeto.nome} está localizada em ${objeto.endereco.rua}, ${objeto.endereco.numero}`);
// }

// imprimeDadosEmpresa(rocketseat);


// const programadorUm = {
//     nome: "Michel",
//     idade: 29,
//     tecnologias: [
//         { nome: 'C++', especialidade: 'Desktop' },
//         { nome: 'Python', especialidade: 'Data Science' },
//         { nome: 'JavaScript', especialidade: 'Web/Mobile' }
//     ]
// }

// function imprimeDadosProgramador(objetoComArray) {
//     console.log(`O usuário ${objetoComArray.nome} tem ${objetoComArray.idade} anos e usa a tecnologia ${objetoComArray.tecnologias[0].nome} 
//     com especialidade em ${objetoComArray.tecnologias[0].especialidade}`);
// }

// imprimeDadosProgramador(programadorUm);

// const programadores = [
//     { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//     { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];

// function imprimeArrayDeProgramadores(array) {
//     for (programador of programadores) {
//         console.log(`${programador.nome} trabalha com ${programador.tecnologias.join(", ")}`);
//     }
// }

// imprimeArrayDeProgramadores(programadores);

// function checaSeUsuarioUsaCSS(array) {
//     for (tecnologia of array.tecnologias) {
//         if (tecnologia == "CSS") {
//             return true;
//         }
//     }
//     return false;
// }

// function checaArrayDeUsuariosComCSS(array) {

//     for (let i = 0; i < array.length; i++) {
//         const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(array[i]);

//         if (usuarioTrabalhaComCSS) {
//             console.log(`O usuário ${array[i].nome} trabalha com CSS`);
//         }
//     }

// }

// checaArrayDeUsuariosComCSS(programadores);

// const clientes = [
//     {
//       nome: "Salvio",
//       receitas: [115.3, 48.7, 98.3, 14.5],
//       despesas: [85.3, 13.5, 19.9]
//     },
//     {
//       nome: "Marcio",
//       receitas: [24.6, 214.3, 45.3],
//       despesas: [185.3, 12.1, 120.0]
//     },
//     {
//       nome: "Lucia",
//       receitas: [9.8, 120.3, 340.2, 45.3],
//       despesas: [450.2, 29.9]
//     }
//   ];

//   function somaNumeros(arrayDeNumeros) {
//     let resultadoDaSoma = 0;
//     for (let numero of arrayDeNumeros) {
//         resultadoDaSoma = resultadoDaSoma + numero;
//     }
//     return resultadoDaSoma;
//   }

//   console.log(somaNumeros(clientes[0].despesas));

//   function calculaSaldo(receitas, despesas) {
//       const totalReceitas
//   }

// const cliente = {
//     name: "Mariana",
//     transactions: [],
//     balance: 0
// };

// function createTransaction(transaction) {
//     cliente.transactions.push(transaction)
//     if (transaction.type == "credit") {

//         cliente.balance = cliente.balance + transaction.value;
//     } else {
//         cliente.balance = cliente.balance - transaction.value;
//     }

// }

// createTransaction({ type: 'credit', value: 120 });
// createTransaction({ type: 'credit', value: 420 });
// createTransaction({ type: 'credit', value: 320 });

// createTransaction({ type: 'debit', value: 120 });
// createTransaction({ type: 'debit', value: 50 });
// // console.log(cliente);

// function getHigherTransactionByType(type) {
//     let highValue = 0;
//     for (let transaction of cliente.transactions) {
//         if (transaction.type === type && transaction.value > highValue) {
//             highValue = transaction.value;
//         }
//     }
//     return highValue;
// }

// console.log(getHigherTransactionByType("debit"));

// function getAverageTransactionValue() {
//     let average = 0;
//     for (let transaction of cliente.transactions) {
//         average = average + transaction.value;
//     }
//     return average / cliente.transactions.length;
// }

// console.log(getAverageTransactionValue());

// function getTransactionsCount() {
//     let counter = {
//         credit: 0,
//         debit: 0,
//     }

//     for (let transaction of cliente.transactions) {
//         if (transaction.type == "credit") {
//             counter.credit++;
//         } else {
//             counter.debit++;
//         }
//     }
//     return counter;
// }

// console.log(getTransactionsCount());