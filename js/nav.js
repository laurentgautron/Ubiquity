const toogleMenu = document.querySelector('.toogle-menu');
const mainMenu = document.querySelector('#main-menu');
toogleMenu.addEventListener('click', function() {
    const open = JSON.parse(toogleMenu.getAttribute('aria-expanded'));
    toogleMenu.setAttribute('aria-expanded', !open);
    mainMenu.hidden = !mainMenu.hidden;
});