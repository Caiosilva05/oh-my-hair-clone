const dropdown = document.getElementsByClassName('dropdown');
const listaDrop = document.getElementsByClassName('lista-drop');

listaDrop[0].style.display = 'none';
dropdown[0].addEventListener('click', function onClick() {
    if (listaDrop[0].style.display == 'none') {
        listaDrop[0].style.display = 'block';
        document.querySelector('.ir-menu').src = '/assets/down2.svg';
    } else {
        listaDrop[0].style.display = 'none';
        document.querySelector('.ir-menu').src = 'assets/ir-links.png';
    }
});
