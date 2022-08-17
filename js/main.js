let botao = document.querySelector('.menu-principa__btn');
let menuPrincipal = document.querySelector('.menu-principal');

botao.addEventListener("click", abreFechaMenu);

function abreFechaMenu(evento) {
    menuPrincipal.classList.toggle('menu-principal--fechado');
}

