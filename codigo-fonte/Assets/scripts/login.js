
import { cadastro, verificarLogin } from './crudLogin.js';
import { iniciarSessao } from './sessaoIniciada.js';

window.addEventListener('DOMContentLoaded', () => {
    iniciarSessao()

    closeModal.onclick = () => {
        login.style.display = "none";

    }


    btnModalLogin.onclick = () => {
        login.style.display = "flex";
        groupNome.style.display = "none";
        btnCadastro.style.display = "none";
        linkLogin.style.display = "none";
        linkCadastro.style.display = "block";
        logintext.style.display = "block"
        btnLogin.style.display = "block"
        groupCep.style.display = "none";
        groupRua.style.display = "none";
        groupNumero.style.display = "none";
    }


    linkLogin.onclick = () => {
        //some ao clicarmos em login
        logintext.style.display = "none"
        groupNome.style.display = "none"
        btnCadastro.style.display = "none";
        linkLogin.style.display = "none";
        //aparece ao clicar em Login
        logintext.style.display = "block"
        linkCadastro.style.display = "block";
        btnLogin.style.display = "block"
        groupCep.style.display = "none";
        groupRua.style.display = "none";
        groupNumero.style.display = "none";
        inputNome.value = ''
        inputSenha.value = ''
        inputEmail.value = ''


    }

    linkCadastro.onclick = () => {
        //some ao clicarmos em login
        logintext.style.display = "block"
        linkCadastro.style.display = "none";
        btnLogin.style.display = "none";
        //aparece ao clicar em Login
        logintext.style.display = "none"
        groupNome.style.display = "flex";
        linkLogin.style.display = "block";
        btnCadastro.style.display = "block";
        groupCep.style.display = "block";
        groupRua.style.display = "block";
        groupNumero.style.display = "block";
        inputNome.value = ''
        inputSenha.value = ''
        inputEmail.value = ''

    }
    let nomeUsuario, emailUsuario, senhaUsuario, cepUsuario, ruaUsuario, numEndUsuario, complementoUsuario ;
    inputNome.onkeyup = () => { nomeUsuario = inputNome.value; }
    inputEmail.onkeyup = () => { emailUsuario = inputEmail.value; }
    inputSenha.onkeyup = () => { senhaUsuario = inputSenha.value; }
    inputCep.onkeyup = () => { cepUsuario = inputCep.value; }
    inputRua.onkeyup = () => { ruaUsuario = inputRua.value; }
    inputNumero.onkeyup = () => { numEndUsuario = inputNumero.value; }
    inputcomplemento.onkeyup = () => { complementoUsuario = inputcomplemento.value; }

inputCep.addEventListener('keyup', () => {
if(inputCep.value.length == 9){
autocompletarRua()
}})

    btnCadastro.onclick = () => {
        let validadorCampos = verificador()

        if (validadorCampos) {
            cadastro(nomeUsuario, emailUsuario, senhaUsuario, cepUsuario, ruaUsuario, numEndUsuario, complementoUsuario)
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
async function autocompletarRua(){
    inputRua.value = await fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`).then(e => e.json()).then(e => {return `${e.logradouro}`})
}