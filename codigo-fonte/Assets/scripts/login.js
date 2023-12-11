
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
        logintext.style.display = "block";
        linkCadastro.style.display = "none";
        btnLogin.style.display = "none";
        //aparece ao clicar em Login
        logintext.style.display = "none";
        groupNome.style.display = "flex";
        linkLogin.style.display = "block";
        btnCadastro.style.display = "block";
        groupCep.style.display = "block";
        groupRua.style.display = "block";
        groupNumero.style.display = "block";
        inputRua.style.border = "border: 2px solid rgb(170, 170, 170);";
        inputNome.style.border = "border: 2px solid rgb(170, 170, 170);";
        inputEmail.style.border = "border: 2px solid rgb(170, 170, 170);";
        inputCep.style.border = "border: 2px solid rgb(170, 170, 170);";
        inputNumero.style.border = "border: 2px solid rgb(170, 170, 170);";
        inputSenha.style.border = "border: 2px solid rgb(170, 170, 170);";

        inputRua.value = '';
        inputCep.style.value = '';
        inputNumero.style.value = '';
        inputNome.value = '';
        inputSenha.value = '';
        inputEmail.value = '';

    }
    let nomeUsuario, emailUsuario, senhaUsuario, cepUsuario, ruaUsuario, numEndUsuario, complementoUsuario;
    inputNome.onkeyup = () => { nomeUsuario = inputNome.value; }
    inputEmail.onkeyup = () => { emailUsuario = inputEmail.value; }
    inputSenha.onkeyup = () => { senhaUsuario = inputSenha.value; }
    inputCep.onkeyup = () => { cepUsuario = inputCep.value; }
    inputRua.onkeyup = () => { ruaUsuario = inputRua.value; }
    inputNumero.onkeyup = () => { numEndUsuario = inputNumero.value; }
    inputcomplemento.onkeyup = () => { complementoUsuario = inputcomplemento.value; }

    inputCep.addEventListener('keyup', () => {
        ruaUsuario = inputRua.value;
        if (inputCep.value.length >= 8) {
            autocompletarRua()
        }
    })

    btnCadastro.onclick = () => {
        let validadorCampos = verificador()

        if (validadorCampos) {
            cadastro(nomeUsuario, emailUsuario, senhaUsuario, cepUsuario, ruaUsuario, numEndUsuario, complementoUsuario)
        } else {
            mensagemErro();
        }
    }

    btnLogin.onclick = () => {
        verificarLogin(emailUsuario, senhaUsuario)
    }

    function verificador() {
        const emailValidador = () => { if (inputEmail.value.includes('@')) { return true } else { return false } }
        if (
            inputRua.value.length > 3 &&
            inputNome.value.length > 3 &&
            inputEmail.value.length > 3 &&
            inputSenha.value.length > 3 &&
            inputCep.value.length > 7 &&
            inputCep.value.length <= 9 &&
            inputNome.value.length > 0
        ) {
            inputRua.style.border = "border: 2px solid rgb(170, 170, 170);"
            inputNome.style.border = "border: 2px solid rgb(170, 170, 170);"
            inputEmail.style.border = "border: 2px solid rgb(170, 170, 170);"
            inputCep.style.border = "border: 2px solid rgb(170, 170, 170);"
            inputNumero.style.border = "border: 2px solid rgb(170, 170, 170);"

            return true
        } else {
            return false
        }
    }
})
async function autocompletarRua() {
    inputRua.value = await fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`).then(e => e.json()).then(e => { return `${e.logradouro}` })
}

function mensagemErro() {
    if (inputRua.value.length <= 3) {
        alert('digite um endereço válido');
        inputRua.style.border = "2px solid red"
    }
    if (inputNome.value.length <= 3) {
        alert('digite um nome válido');
        inputNome.style.border = "2px solid red"
    }
    if (inputEmail.value.length <= 3) {
        alert('digite um email válido');
        inputEmail.style.border = "2px solid red"
        if (!inputEmail.value.includes('@')) {
            alert('O Email deve ser realizado no formato: XXXXX@XXXX.XXX')
        }
    }
    if (inputCep.value.length <= 7 || inputCep.value.length > 9) {
        alert('digite um CEP válido');
        inputCep.style.border = "2px solid red"
    }
    if (inputNumero.value === "") {
        alert('digite um Número de residência válido');
        inputNumero.style.border = "2px solid red"
    }
    if (inputSenha.value.length <= 3) {
        alert('digite uma senha válida');
        inputSenha.style.border = "2px solid red"
    }

}
