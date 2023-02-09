import css from "./style.css";

const createPage = () => {
  const body = document.querySelector("body");

  const content = document.createElement("div");
  content.classList.add("content");

  const header = document.createElement("div");
  header.classList.add("header");
  const headerImg = document.createElement("p");
  headerImg.classList.add("header__elements1");
  const headerTitle = document.createElement("p");
  headerTitle.classList.add("header__elements");
  header.appendChild(headerImg);
  header.appendChild(headerTitle);

  const menu = document.createElement("div");
  menu.classList.add("menu");

  content.appendChild(header);
  content.appendChild(menu);

  body.appendChild(content);
};

export { createPage };
