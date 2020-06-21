const express = require("express");
const nunjucks = require("nunjucks");

const courses = require("./data");
const server = express();

server.use(express.static("public"));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (request, response) {
    const about = {
        avatar_url: "https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactnative/3.0.1/1588456740326/Microsoft.VisualStudio.Services.Icons.Default",
        company_name: "Rocketseat",
        role: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        techs: [
            { name: "Node.js" },
            { name: "React.js" },
            { name: "React Native" }
        ],
        links: [
            { name: "GitHub", url: "https://github.com/Rocketseat" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/" },
            { name: "Facebook", url: "https://www.facebook.com/rocketseat" }
        ]
    }
    return response.render("about", { about: about });
})

server.get("/cursos", function (request, response) {

    return response.render("courses", { items: courses });
})



server.get("/curso", function (request, response) {
    const id = request.query.id;

    const course = courses.find(function (course) {
        return course.id == id;
    })

    if (!course) {
        return response.send("Curso não encontrado");
    }
    return response.render("course", { item: course })
})



server.use(function (req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function () {
    console.log("server is running");
})