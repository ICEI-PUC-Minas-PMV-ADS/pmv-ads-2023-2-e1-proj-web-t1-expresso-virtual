let usuariosCadastrados = localStorage.getItem("usuarios");
let ArrUsuariosCadastro = JSON.parse(usuariosCadastrados);

//console.log(dadosArmazenados);

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

let usersList = JSON.parse(localStorage.getItem("usuarios"))
let usersLength = usersList.length

var trace1 = {
    type: 'bar',
    x: [1, 2, 3, 4],
    y: [usersLength],
    marker: {
        color: '#C8A2C8',
        line: {
            width: 2.5
        }
    }
  };
  
  var data = [ trace1 ];
  
  var layout = { 
    title: 'Responsive to window\'s size!',
    font: {size: 18}
  };
  
  var config = {responsive: true}
  
  Plotly.newPlot('myDiv', data, layout, config );
  

