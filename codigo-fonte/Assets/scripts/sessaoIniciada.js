
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
    if (urlDaPagina != "https://pmv-ads-2023-2-e1-proj-web-t1-expresso-virtual-6d1hp9k7y.vercel.app/Adm-page/adm.html") {
        window.location.href = "https://pmv-ads-2023-2-e1-proj-web-t1-expresso-virtual-6d1hp9k7y.vercel.app/Adm-page/adm.html"
    }
}

function sairDaPaginaAdmin() {
    var urlDaPagina = window.location.href;
    if (urlDaPagina == "https://pmv-ads-2023-2-e1-proj-web-t1-expresso-virtual-6d1hp9k7y.vercel.app/Adm-page/adm.html") {
        window.location.href = "https://pmv-ads-2023-2-e1-proj-web-t1-expresso-virtual-6d1hp9k7y.vercel.app/index.html"
    }
}
