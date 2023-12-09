
export function iniciarSessao() {
    var armazenaUserJSON = localStorage.getItem('usuarioLogado');
    var armazenaUser = JSON.parse(armazenaUserJSON);
    if (armazenaUser != null) {
        btnUser.style.display = "block";
        IconBtnUser.style.display = "block"
        btnModalLogin.style.display = "none"
        login.style.display = "none";
        btnUser.onclick = () => {
            alert("deslogado")
            localStorage.removeItem('usuarioLogado')
            sairDaPaginaAdmin()
            iniciarSessao()
        }
    }else {
        btnUser.style.display = "none";
        btnModalLogin.style.display = "block"
    }
    try {
        if (armazenaUser.nome === 'admin' && armazenaUser.email === 'admin@admin.com' && armazenaUser.senha === "admin") {
            redirecionar()
        }
    } catch (error) {
        console.log(error)
    }
}
function redirecionar() {
    var urlDaPagina = window.location.href;
    if (urlDaPagina != "http://127.0.0.1:5501/codigo-fonte/Adm-page/adm.html") {
        window.location.href = "./Adm-page/adm.html"
    }
}

function sairDaPaginaAdmin() {
    var urlDaPagina = window.location.href;
    if (urlDaPagina == "http://127.0.0.1:5501/codigo-fonte/Adm-page/adm.html") {
        window.location.href = "../index.html"
    }
}
