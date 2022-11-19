const newsData = [
  {
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
const article = [
  {
    number: "01",
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
    photo: "./assets/images/image-retro-pcs.jpg",
  },
  {
    number: "02",
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
    photo: "./assets/images/image-top-laptops.jpg",
  },
  {
    number: "03",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
    photo: "./assets/images/image-gaming-growth.jpg",
  },
];

function start() {
  console.log("hej!");
  addElementToList("#news", newsData);
  addElementToList("#articles", article);
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
}
function ArticleElement(title, text, number, photo) {
  const wrapper = document.createElement("article");
  const imgWrapper = document.createElement("div");
  const img = document.createElement("img");
  const textWrapper = document.createElement("div");
  const numElement = document.createElement("h2");
  const titleElement = document.createElement("h3");
  const textElement = document.createElement("p");

  imgWrapper.insertAdjacentElement("beforeend", img);

  img.src = photo;
  numElement.innerText = number;
  titleElement.innerText = title;
  textElement.innerText = text;

  wrapper.classList.add("article");
  imgWrapper.classList.add("article-img");
  numElement.classList.add("text-number");
  titleElement.classList.add("text-title");
  textElement.classList.add("text-paragraph");

  textWrapper.insertAdjacentElement("beforeend", numElement);
  textWrapper.insertAdjacentElement("beforeend", titleElement);
  textWrapper.insertAdjacentElement("beforeend", textElement);

  wrapper.insertAdjacentElement("beforeend", imgWrapper);
  wrapper.insertAdjacentElement("beforeend", textWrapper);

  return wrapper;
}

function addElementToList(where, data) {
  const list = data;

  list.map((e) => {
    console.log(e);
    let el = null;
    if (where === "#news") {
      el = NewsElement(e.title, e.text);
    } else {
      el = ArticleElement(e.title, e.text, e.number, e.photo);
    }

    document.querySelector(where).insertAdjacentElement("beforeend", el);
  });
}

start();
