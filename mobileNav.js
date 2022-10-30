let header = document.getElementsByClassName('header-main')[0];
const closeBtn = document.getElementsByClassName('close-btn')[0];
const mobileNavMenu = document.getElementsByClassName('mobile-nav-menu')[0];
const mobileNav = document.getElementsByClassName('mobile-nav-btn')[0];
const testEl = document.getElementsByClassName('test')[0];

closeBtn.addEventListener('click', function(e) {
  mobileNavMenu.style.opacity = '0';
  mobileNav.style.opacity = '1'
})

mobileNav.addEventListener('click', function(e) {
  mobileNavMenu.style.opacity = '1';
  mobileNav.style.opacity = '0';
})
