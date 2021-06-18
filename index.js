// Animacion del menu
let btnMenu = document.querySelector("#btn-menu");
let menu = document.querySelector(".menu");

let activador = true;

btnMenu.addEventListener("click", function () {
  document.querySelector("#btn-menu i").classList.toggle("fa-times");
  if (activador) {
    menu.style.left = "0";
    menu.style.transition = "0.6s";
    activador = false;
  } else {
    activador = false;
    menu.style.left = "-100%";
    menu.style.transition = "0.6s";
    activador = true;
  }
});
