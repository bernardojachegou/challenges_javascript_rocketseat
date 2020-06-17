// Baseado no desafio anterior, utilize a mesma lista de usuários construída.
// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
// Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída, se SIM, imprima em tela as informações do usuário:
// `O usuário {nome} trabalha com CSS`

const users = [
    { name: "Carlos", techs: ["HTML", "CSS"] },
    { name: "Jasmine", techs: ["JavaScript", "CSS"] },
    { name: "Tuane", techs: ["HTML", "Node.js"] }
  ];

  function ifWorksWithCss(user) {
      for (let tech of user.techs) {
          if (tech == "CSS") {
              return true;
          }
      }
      return false;
  }

  for (let i = 0; i < users.length; i++) {
    const cssUser = ifWorksWithCss(users[i]);
  
    if (cssUser) {
      console.log(`The user ${users[i].name} works with CSS`);
    }
  }