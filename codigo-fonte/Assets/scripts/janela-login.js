window.addEventListener('load',() => {

    groupNome.style.display = "none"
    btnCadastro.style.display = "none";
    linkLogin.style.display = "none";
    linkCadastro.style.display = "block";
    btnLogin.style.display = "block"


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


    function geradorId() {
        try {
            let ultimoIDCadastrado = localStorage.getItem("ultimoIDCadastrado")
            let idConvertido = JSON.parse(ultimoIDCadastrado);
            let idAtual = idConvertido + 1;
            localStorage.setItem('ultimoIDCadastrado', JSON.stringify(idAtual));
            return idAtual;
        } catch (error) {
            console.log(error)
            let idAtual = 1;
            localStorage.setItem('ultimoIDCadastrado', JSON.stringify(idAtual));
            return idAtual;
        }
    }

    async function cadastro(nomeUsuario, emailUsuario, senhaUsuario) {
        try {
            let usuariosCadastrados = localStorage.getItem('usuarios');
            let ArrUsuariosCadastro = JSON.parse(usuariosCadastrados);
            idUsuario = await geradorId();
            let cadastro = { nome: nomeUsuario, email: emailUsuario, id: idUsuario, senha: senhaUsuario };
            ArrUsuariosCadastro.push(cadastro);
            localStorage.setItem("usuarios", JSON.stringify(ArrUsuariosCadastro));
        } catch (error) {
            let arrInicial = [{ nome: nomeUsuario, email: emailUsuario, id: idUsuario, senha: senhaUsuario }]
            localStorage.setItem('usuarios', JSON.stringify(arrInicial))
        }
    }
    function verificarLogin(emailUsuario, senhaUsuario) {

        let usuariosCadastrados = localStorage.getItem('usuarios');
        let ArrUsuariosCadastro = JSON.parse(usuariosCadastrados);

        let verificarLoginUsuario = ArrUsuariosCadastro.find((t) => {
            if (t.email == emailUsuario && t.senha == senhaUsuario) {
                let usuarioLogado = { nome: t.nome, email: t.email, id: t.id, senha: t.senha }
                return usuarioLogado
            }
        })
        if (verificarLoginUsuario != null && verificarLoginUsuario != undefined) {
            iniciarSessao(verificarLoginUsuario)
        } else {
            alert("usuário não cadastrado")
            console.log(verificarLoginUsuario)
        }

    }

    function iniciarSessao(usuarioLogado) {
        console.log(usuarioLogado)
    }

})