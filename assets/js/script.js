window.onload = () => {
  let menuHamburger = document.querySelector(".menu-mobile");
  let menuLista = document.querySelector(".menu nav ul");
  
  menuHamburger.addEventListener("click", function () {
    if (menuLista.style.display == "flex") {
      menuLista.style.display = "none";
    } else {
      menuLista.style.display = "flex";
    }
  });
};
