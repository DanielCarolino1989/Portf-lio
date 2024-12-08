const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');

// Abrir o menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
});

// Fechar o menu
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});