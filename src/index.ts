import "./style.css";
import "./fonts/fonts.css";

function component(text: string) {
  const element = document.createElement("h1");
  element.textContent = text;
  return element;
}

document.body.prepend(component("Проект собран на Webpack"));
