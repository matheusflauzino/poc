var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.get("/maps", function (req, res) {
  var dados = [
    {
      lat: -25.470991,
      lon: -49.271036,
    },
    {
      lat: -0.935586,
      lon: -49.63554,
    },
  ];

  res.send(JSON.stringify(dados));
});

app.get("/users", function (req, res) {
  var dados = [
    {
      name: "Matheus Flauzino",
    },
    {
      name: "Rafael Durelli",
    },
    {
      name: "Letícia Amaral",
    },
  ];

  res.send(JSON.stringify(dados));
});

app.listen(8003, function () {
  console.log("Servidor rodando na porta 8003.");
});
