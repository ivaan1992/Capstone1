// Mobile menu
const menu = document.querySelector('.cont-menu');
const hamburger = document.querySelector('.hamburger-menu');
const xIcon = document.querySelector('.xIcon');

function toggleMenu() {
    if (menu.classList.remove('showMenu')) {
        menu.classList.contains('showMenu');
        xIcon.style.display = 'none';
    } else {
        menu.classList.add('showMenu');
        xIcon.style.display = 'block'
    }
}

hamburger.addEventListener('click', toggleMenu);