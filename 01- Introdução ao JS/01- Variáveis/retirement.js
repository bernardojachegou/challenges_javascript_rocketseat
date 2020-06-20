// Cálculo de aposentadoria
// Crie um programa para calcular a aposentadoria de uma pessoa.
// Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos).
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
// Com base nas regras acima imprima na tela as mensagens:
// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

const name = "João";
const gender = "M";
const age = 55;
const tribute = 35;

const womanRetirement = gender == "F" && age + tribute >= 85;
const manRetirement = gender == "M" && age + tribute >= 95;

if (womanRetirement || manRetirement) {
    console.log(`${name}, você pode aposentar!`)
} else {
    console.log(`${name}, você ainda não pode se aposentar.`)
}
