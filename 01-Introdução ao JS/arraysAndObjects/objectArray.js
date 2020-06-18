// Vetores e objetos
// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:
// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const developer = {
    name: "Michel",
    age: 29,
    techs: [
        { name: 'C++', expertise: 'Desktop' },
        { name: 'Python', expertise: 'Data Science' },
        { name: 'JavaScript', expertise: 'Web/Mobile' }
    ]
}

console.log(`The User ${developer.name} is ${developer.age} years old and uses the programming language: 
${developer.techs[0].name} with expertise in ${developer.techs[0].expertise}`);