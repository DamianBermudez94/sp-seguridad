// Animacion del menu
function menu() {
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
}

function animacionScroolIzquierda() {
  window.addEventListener("scroll", () => {
    let animacion = document.querySelectorAll(".animacion");
    //let posicionObj = animacion.getBoundingClientRect().top;
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    for (var i = 0; i < animacion.length; i++) {
      let alturaAnimado = animacion[i].offsetTop;
      if (alturaAnimado - 400 < scrollTop) {
        animacion[i].style.opacity = 1;

        animacion[i].classList.add("mostrarArriba");
      }
    }

    //let tamaÃ±oDePantalla = window.innerHeight / 1;

    //if (posicionObj > tamaÃ±oDePantalla) {
    //animacion.style.animation = "mover 2s ease-out";
    //animacion.style.animation = "moverdos 2s ease-out";
    //}
  });

  window.addEventListener("scroll", () => {
    //let posicionObj = animacion.getBoundingClientRect().top;

    let animacionIzquierda = document.querySelectorAll(".animacion-izquierda ");
    let animacionDerecha = document.querySelectorAll(".animacion-derecha");
    let scrollTopDyI = document.documentElement.scrollTop;

    for (var i = 0; i < animacionIzquierda.length; i++) {
      let alturaAnimacion = animacionIzquierda[i].offsetTop;

      if (alturaAnimacion - 400 < scrollTopDyI) {
        animacionIzquierda[i].style.opacity = 1;

        animacionIzquierda[i].classList.add("mostrarIzquierda");
      }
    }

    for (var i = 0; i < animacionDerecha.length; i++) {
      let alturaAnimacion = animacionDerecha[i].offsetTop;

      if (alturaAnimacion - 300 < scrollTopDyI) {
        animacionDerecha[i].style.opacity = 1;

        animacionDerecha[i].classList.add("mostrarDerecha");
      }
    }
    //let tamaÃ±oDePantalla = window.innerHeight / 1;

    //if (posicionObj > tamaÃ±oDePantalla) {
    //animacion.style.animation = "mover 2s ease-out";
    //animacion.style.animation = "moverdos 2s ease-out";
    //}
  });
}

//animacion de

function main() {
  animacionScroolIzquierda();
  menu();
}
main();
