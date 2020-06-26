<h1 align="center">
    <img alt="logo" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<p align="center">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/bernardojachegou/launchbase_challenges_rocketseat?color=%23ff9900&style=for-the-badge">
    <a href="https://github.com/bernardojachegou/launchbase_challenges_rocketseat/commits/master">
        <img alt="GitHub last commit (branch)" 
        src="https://img.shields.io/github/last-commit/bernardojachegou/launchbase_challenges_rocketseat/master?color=%23ff9900&style=for-the-badge">
    </a>
    <a target="blank" href="https://www.linkedin.com/in/bernardojachegou/">
        <img alt="Made by Michel Bernardo"
            src="https://img.shields.io/badge/Mady%20By-Michel%20Bernardo-%23ff9900?style=for-the-badge">
    </a>
</p>


<h3 id="frontend" align="center"> Desafios: Introdução ao Backend</h3>

<h3 align="center">Questões</h3>

<h3>Desafio 1: Primeiro servidor</h3>

## :rocket: Sobre o desafio

Nesse desafio você deve criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de `Cursos` e `Sobre`). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.

_Erro 404 é comum aparecer em páginas da internet, quando não foi encontrado nenhum conteúdo._

### Arquivos HTML

- `courses.njk`: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.
- `about.njk`: Arquivo referente à pagina de descrição, deve ser servido na rota /about.
- `layout.njk`: Arquivo referente à base comum entre as páginas.
- `not-found.njk`: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:

  - Layout.njk como base
  - Ter um texto infortivo sobre o erro

  Dica: Para capturar essas requisições, basta adicionar esse trecho após **todas** as rotas no seu `server.js`:

```js
server.use(function(req, res) {
  res.status(404).render("not-found");
});
```

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.

<h3>Desafio 2: Arquivos nunjucks e dados dinâmicos</h3>

## :rocket: Sobre o desafio

Nesse desafio você deve atualizar os arquivos com informações de cursos e descrição de forma dinâmica.

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.

<h3>Desafio 3: Página de descrição do curso</h3>

## :rocket: Sobre o desafio

Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.

### Rota

A rota também será a `/courses`, porém o id do curso será passado via route params (ex.: `/courses/id_do_curso`). Dica: utilize o req.params para recuperar o id fornecido na rota.

```js
server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  return res.send(`O id fornecido na rota é: ${id}`);
});
```

### Informações

- Layout padrão
- Card do curso
- Link que redireciona para a página do curso

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.


