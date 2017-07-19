var hamburgerButton = document.getElementById('hamburger-button');
var menuContainerJs = document.getElementById('menu-container-js');

hamburgerButton.addEventListener('touchstart',toggleMenu);
      
function toggleMenu(){
hamburgerButton.classList.toggle('is-active')
menuContainerJs.classList.toggle('active')
};