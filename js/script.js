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

function mostrarSenha(){
    const inputPass = document.getElementById('login-senha');
    const btnShowPass = document.getElementById('eye-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}

