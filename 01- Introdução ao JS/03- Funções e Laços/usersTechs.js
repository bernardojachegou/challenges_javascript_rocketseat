// Usuários e tecnologias
// Crie um programa que armazena um array de usuários(objetos), cada usuário tem um nome e suas tecnologias(novo array), por exemplo:
// const usuarios = [
//     { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//     { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
// {nome} trabalha com [tecnologia, tecnologia];

const users = [
    { name: "Carlos", techs: ["HTML", "CSS"] },
    { name: "Jasmine", techs: ["JavaScript", "CSS"] },
    { name: "Tuane", techs: ["HTML", "Node.js"] }
];

for (let user of users) {
    console.log(`${user.name} works using ${user.techs}`);
}