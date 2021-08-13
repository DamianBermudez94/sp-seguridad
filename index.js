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
function menuActive() {
  let enlaces = document.querySelectorAll(".menu-contenedor li a");
  console.log("Soy el enlace", enlaces);
  enlaces.forEach((element) => {
    element.addEventListener("click", (event) => {
      enlaces.forEach((link) => {
        link.classList.remove("active");
      });
      event.target.classList.add("active");
    });
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

// animacion slider clientes

function SliderClientes() {
  // Animacion slider

  const slider = document.querySelector("#slider");
  let sliderSection = document.querySelectorAll(".slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];

  slider.insertAdjacentElement("afterbegin", sliderSectionLast);

  function nextRight() {
    let sliderSectionFirts = document.querySelectorAll(".slider-section")[0];

    slider.style.marginLeft = "-200%";
    slider.style.transition = "0.6s";
    setTimeout(function () {
      slider.style.transition = "0.6s";
      slider.insertAdjacentElement("beforeend", sliderSectionFirts);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  /*function Prev() {
    const btnRight = document.querySelector("#btn-right");
    const btnLeft = document.querySelector("#btn-left");
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.6s";

    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }
  btnLeft.addEventListener("click", function () {
    Prev();
  });

  btnRight.addEventListener("click", function () {
    nextRight();
  });*/

  setInterval(function () {
    nextRight();
  }, 5000);
}

//animacion de

function main() {
  SliderClientes();
  animacionScroolIzquierda();
  menuActive();
  menu();
}
main();
