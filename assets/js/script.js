let menuHamburger = document.querySelector(".menu-mobile");
let menuLista = document.querySelector('.menu nav ul');

window.onload = () => {
    menuHamburger.addEventListener("click", () => {
    if (menuLista.style.display == 'flex'){
      menuLista.style.display = 'none';
    } else{
      menuLista.style.display = 'flex';
    }
  });
};
