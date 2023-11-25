
export function iniciarSessao() {
if(localStorage.getItem('usuarioLogado') != null){
    console.log("hello world");
    btnUser.style.display = "block";
    IconBtnUser.style.display = "block"
    btnModalLogin.style.display = "none"

    btnUser.onclick = () => {
        alert("deslogado")
        localStorage.removeItem('usuarioLogado')
        iniciarSessao()
    }
}
else{
    btnUser.style.display = "none";
    btnModalLogin.style.display = "block"
}
}
