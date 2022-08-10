const botaoMenu = document.querySelector('.botao-menu');

function toggleMenu() {
    const nav = document.querySelector('.nav-mobile');
    nav.classList.toggle('ativo');
}

botaoMenu.addEventListener('click', toggleMenu);
