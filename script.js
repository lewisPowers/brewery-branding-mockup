let dropdownMenu = document.getElementById('nav-menu');
let gearButton = document.getElementById('menu-example');

gearButton.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  dropdownMenu.classList.toggle('hide');
}
