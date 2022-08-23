function menuShow() {
    let menuMobile = document.querySelector('.nav-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('#menu-mob').src = '/assets/menu.png';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('#menu-mob').src = '/assets/close-menu.svg';
    }
}
