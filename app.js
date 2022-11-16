const newsData = [
  { title: "hej!!!!", text: " jestem textem" },
  { title: "hej!2", text: " jestem textem22" },
  { title: "hej!!!!", text: " jestem textem33" },
  { title: "hej!4!!!", text: " jestem textem4444" },
  { title: "hej!4!!!", text: " jestem textem4444" },
];

function start() {
  console.log("hej!");
  addElementToList("#news", newsData);
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

function NewsElement(title, text) {
  const wrapper = document.createElement("div");
  const titleElement = document.createElement("h2");
  const textElement = document.createElement("p");

  titleElement.innerText = title;
  textElement.innerText = text;

  wrapper.insertAdjacentElement("afterbegin", titleElement);
  wrapper.insertAdjacentElement("beforeend", textElement);

  wrapper.classList.add("new");
  return wrapper;
  console.log(wrapper);
}

function addElementToList(where, data) {
  const list = data;

  list.map((e) => {
    console.log(e);
    const el = NewsElement(e.title, e.text);
    document.querySelector(where).insertAdjacentElement("beforeend", el);
  });
}

const func = (e) => {
  console.log("jestem funkcja strzalowa");
};

start();
