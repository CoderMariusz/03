import myjson from "./data.json" assert { type: "json" };

function start() {
  console.log("hej!");
  addListener();
}

function toggleMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("open");
}
function addListener() {
  const menu = document.querySelector("#menu");
  const closeMenu = document.querySelector("#menu-close");
  console.log(menu);
  console.log(closeMenu);
  menu.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);
}

start();
