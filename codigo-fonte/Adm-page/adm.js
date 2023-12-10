let usuariosCadastrados = localStorage.getItem("usuarios");
let ArrUsuariosCadastro = JSON.parse(usuariosCadastrados);

puxar.onclick = function () {
  let dadosArmazenados = JSON.parse(localStorage.getItem("usuarios"));
};

document.addEventListener("DOMContentLoaded", function () {
  let tabela = document.getElementById("tabela");

  function adicionarLinha(nome, email, id) {
    let novaLinha = tabela.insertRow();
    let colunaNome = novaLinha.insertCell(0);
    let colunaEmail = novaLinha.insertCell(1);
    let colunaId = novaLinha.insertCell(2);

    colunaNome.innerHTML = nome;
    colunaEmail.innerHTML = email;
    colunaId.innerHTML = id;
  }

  document.getElementById("puxar").addEventListener("click", function () {
    let dadosArmazenados = JSON.parse(localStorage.getItem("usuarios"));

    tabela.innerHTML = "<tr><th>Nome</th><th>Email</th><th>ID</th></tr>";

    if (dadosArmazenados) {
      dadosArmazenados.forEach(function (cliente) {
        adicionarLinha(cliente.nome, cliente.email, cliente.id);
      });
    }
  });
});

let usersList = JSON.parse(localStorage.getItem("usuarios"));
let usersLength = usersList.length;
let purchaseList = JSON.parse(localStorage.getItem("storedCart"));
let purchaseLength = purchaseList.length;

var dataAtual = new Date();
var nomesDosMeses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
var mes = nomesDosMeses[dataAtual.getMonth()];

var trace1 = {
  type: "bar",
  name: "Usuários cadastrados",
  x: [`${mes}`],
  y: [usersLength],
  marker: {
    color: "rgb(49,130,189)",
  },
};

var data = [trace1];

var layout = {
  title: "Quantidade de usuários cadastrados no mês",
  font: { size: 18 },
};

var config = { responsive: true };

var trace2 = {
  type: "bar",
  name: "Compras",
  x: [`${mes}`],
  y: [purchaseLength],
  marker: {
    color: "rgb(204,204,204)",
  },
};

var data = [trace1, trace2];

var layout = {
  xaxis: {
    tickangle: -45,
  },
  barmode: "group",
};

var config = { responsive: true };

Plotly.newPlot("myDiv2", data, layout, config);
