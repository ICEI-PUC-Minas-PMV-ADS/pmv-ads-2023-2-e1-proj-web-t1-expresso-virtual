let navigator = document.getElementById("navigator")
let btnMenu = document.getElementById("btn-menu-responsivo").addEventListener('click', () => {
    navigator.classList.remove("navigator--is-hidden")
});
let btnCloseMenu = document.getElementById("btn-close-menu").addEventListener('click', () => {
    navigator.classList.add("navigator--is-hidden")
});

