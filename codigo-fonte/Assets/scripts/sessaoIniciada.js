
export function iniciarSessao() {
    var armazenaUserJSON = localStorage.getItem('usuarioLogado');
    var armazenaUser = JSON.parse(armazenaUserJSON);
    if (armazenaUser != null) {
        console.log("hello world");
        btnUser.style.display = "block";
        IconBtnUser.style.display = "block"
        btnModalLogin.style.display = "none"
        login.style.display = "none";

    
        if (armazenaUser.nome == 'admin' && armazenaUser.email == 'admin@admin.com' && armazenaUser.senha == "admin") {
            redirecionar()
        }

        btnUser.onclick = () => {
            alert("deslogado")
            localStorage.removeItem('usuarioLogado')
            sairDaPaginaAdmin()
            iniciarSessao()
        }
    }
    else {
        btnUser.style.display = "none";
        btnModalLogin.style.display = "block"
    }
}
function redirecionar() {
    var urlDaPagina = window.location.href;
    if (urlDaPagina != "http://127.0.0.1:5500/codigo-fonte/Adm-page/adm.html") {
        window.location.href = "../Adm-page/adm.html"
    }
}

function sairDaPaginaAdmin() {
    var urlDaPagina = window.location.href;
    if (urlDaPagina == "http://127.0.0.1:5500/codigo-fonte/Adm-page/adm.html") {
        window.location.href = "../Home-Page/home.html"
    }
}
