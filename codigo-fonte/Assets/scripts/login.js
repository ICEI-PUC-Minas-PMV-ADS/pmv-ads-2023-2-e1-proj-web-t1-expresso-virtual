
import { cadastro, verificarLogin } from './crudLogin.js';
import { iniciarSessao } from './sessaoIniciada.js';

window.addEventListener('DOMContentLoaded', () => {
    iniciarSessao()

    closeModal.onclick = () => {
        login.style.display = "none";
    }

    btnModalLogin.onclick = () => {
        login.style.display = "flex";

        //some ao clicarmos em login
        groupNome.style.display = "none"
        btnCadastro.style.display = "none";
        linkLogin.style.display = "none";
        //aparece ao clicar em Login
        linkCadastro.style.display = "block";
        btnLogin.style.display = "block"
    }

    linkLogin.onclick = () => {
        //some ao clicarmos em login
        groupNome.style.display = "none"
        btnCadastro.style.display = "none";
        linkLogin.style.display = "none";
        //aparece ao clicar em Login
        linkCadastro.style.display = "block";
        btnLogin.style.display = "block"

    }

    linkCadastro.onclick = () => {
        //some ao clicarmos em login
        linkCadastro.style.display = "none";
        btnLogin.style.display = "none";
        //aparece ao clicar em Login
        groupNome.style.display = "flex";
        linkLogin.style.display = "block";
        btnCadastro.style.display = "block";

    }
    let nomeUsuario, emailUsuario, senhaUsuario;
    inputNome.onkeyup = () => { nomeUsuario = inputNome.value; }
    inputEmail.onkeyup = () => { emailUsuario = inputEmail.value; }
    inputSenha.onkeyup = () => { senhaUsuario = inputSenha.value; }



    btnCadastro.onclick = () => {
        let validadorCampos = verificador()

        if (validadorCampos) {
            cadastro(nomeUsuario, emailUsuario, senhaUsuario)
        } else {
            alert(inputNome.value.length)
        }
    }

    btnLogin.onclick = () => {
        verificarLogin(emailUsuario, senhaUsuario)
    }

    function verificador() {
        if (
            inputNome.value.length > 3 &&
            inputEmail.value.length > 3 &&
            inputSenha.value.length > 3
        ) {
            return true
        } else {
            return false
        }
    }
})
