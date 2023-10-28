let formularioSection = document.getElementById('formularioSectionLogin')
let botaoLinkLogin = document.getElementById('btn-link-login').addEventListener('click', (e)=>{
    e.preventDefault();
    formularioSection.classList.toggle("formulario--is-hidden")
});
let btnCloseForm = document.getElementById('btn-close-form').addEventListener('click', (e)=>{
    e.preventDefault();
    formularioSection.classList.toggle("formulario--is-hidden")
});


let botaoLogin = document.getElementById('btn-login').addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Hello World')
});
