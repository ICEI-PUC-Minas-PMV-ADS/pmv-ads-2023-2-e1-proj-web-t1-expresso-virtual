import { iniciarSessao } from './sessaoIniciada.js';

export async function cadastro(nomeUsuario, emailUsuario, senhaUsuario) {
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

export function verificarLogin(emailUsuario, senhaUsuario) {

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
