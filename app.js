function start() {
  console.log("hej!");
  addListener();
}

function toggleMenuOpen() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("open");
}

function addListener() {
  const menu = document.querySelector("#menu");
  const closeMenu = document.querySelector("#menu-close");

  menu.addEventListener("click", toggleMenuOpen);
  closeMenu.addEventListener("click", toggleMenuOpen);
}

start();
