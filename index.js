// Animacion del menu
/*function menu() {
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


}*/
function menu() {
  const menu = document.querySelector(".menu");
  const menuOpen = document.querySelector(".btn-menu_open");
  const menuClose = document.querySelector(".btn-menu_close");

  function toggleMenu() {
    menu.classList.toggle("menu_opened");
  }
  menuOpen.addEventListener("click", toggleMenu);
  menuClose.addEventListener("click", toggleMenu);

  const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        console.log("asdsa", id);
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);
        console.log("sdafasdfdsa", menuLink);
        if (entry.isIntersecting) {
          document
            .querySelector(".menu a.selected")
            .classList.remove("selected");
          console.log("soy la entry", entry);
          menuLink.classList.add("selected");
        }
      });
    },
    { rootMargin: "-30% 0px -70% 0px" }
  );

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      menu.classList.remove("menu_opened");
    });

    const hash = menuLink.getAttribute("href");
    console.log("soy el hash", hash);
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);
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

      if (alturaAnimacion - 400 < scrollTopDyI) {
        animacionDerecha[i].style.opacity = 1;

        animacionDerecha[i].classList.add("mostrarDerecha");
      }
    }
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

    slider.style.marginLeft = "-100%";
    slider.style.transition = "0.6s";
    setTimeout(function () {
      slider.style.transition = "0.6s";
      slider.insertAdjacentElement("beforeend", sliderSectionFirts);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  setInterval(function () {
    nextRight();
  }, 5000);
}

function enviarFormulario() {
  const $form = document.querySelector("#form");
  const $buttonEnviar = document.querySelector("#enviar-mail");
  $form.addEventListener("submit", handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    $buttonEnviar.setAttribute(
      "href",
      `mailto:bermudezdamian7@gmail.com?subject= Nombre:${form.get(
        "name"
      )} Email:${form.get("mail")} Telefono:${form.get(
        "phone"
      )} Asunto:${form.get("asunto")}&body=${form.get("message")} `
    );
    $buttonEnviar.click();
  }
}

//animacion de

function main() {
  enviarFormulario();
  SliderClientes();
  animacionScroolIzquierda();
  menu();
}
main();
