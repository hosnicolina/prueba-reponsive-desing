var hamburgerButton = document.getElementById('hamburger-button');
var menuContainerJs = document.getElementById('menu-container-js');
var bodyPage = document.body;

hamburgerButton.addEventListener('touchstart',toggleMenu);
      
function toggleMenu(){
hamburgerButton.classList.toggle('is-active')
menuContainerJs.classList.toggle('active')
};

function desplegar(){
  menuContainerJs.classList.add('active')
  hamburgerButton.classList.add('is-active')
}
function ocultar(){
  menuContainerJs.classList.remove('active')
  hamburgerButton.classList.remove('is-active')
}
//gestos touch

var gestos = new Hammer(bodyPage);
gestos.on('swipeleft', ocultar);

var gestos = new Hammer(bodyPage);
gestos.on('swiperight', desplegar);
