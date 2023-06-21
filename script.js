function mostrar() {
  const section = document.querySelectorAll(".section-js");
  function mostrar() {
    section.forEach((item) => {
      const topo = item.getBoundingClientRect().top - 500;
      if (topo <= 0) {
        item.classList.add("ativo");
      }
    });
  }
  window.addEventListener("scroll", mostrar);
}
function rolar() {
  const links = document.querySelectorAll("a[href^='#']");
  function ir(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    console.log(href);
    console.log(section);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  links.forEach((item) => {
    item.addEventListener("click", ir);
  });
}
function hamburger() {
  const hamb = document.querySelector(".hamburger");
  const lista = document.querySelector(".nav-lista-p");
  const itemLista = document.querySelectorAll(".nav-lista-p li");

  function ativar() {
    lista.classList.toggle("ativo");
  }
  function destivar() {
    lista.classList.toggle("ativo");
  }
  itemLista.forEach((item) => {
    item.addEventListener("click", function () {
      destivar();
    });
  });
  hamb.addEventListener("click", ativar);
}
mostrar();
rolar();
hamburger();
