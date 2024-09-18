function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}

const menuButton = document.getElementById('menuButton');
const burguer = document.getElementById('burguer');

menuButton.addEventListener('click', function () {

    if (burguer.textContent === 'menu') {
        burguer.textContent = 'menu_open';
    } else {
        burguer.textContent = 'menu';
    }
});

