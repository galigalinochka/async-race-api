//import { CreateElem } from "../../../general/components/index";
import { Button } from "../../../general/components/ui";
import { Component } from "../../../general/components/components";
//import { Main } from "./main";
//import { Settings } from "./settings";

const Buttons = [
  { id: "garage", text: "TO GARAGE" },
  { id: "winners", text: "TO WINNERS" },
];

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderHeader() {
    const buttons = document.createElement("div");
    buttons.className = "header-container";
    Buttons.forEach((elem) => {
      const buttonElem = new Button("button", "button").render() as HTMLElement;
      buttonElem.id = `${elem.id}`;
      buttonElem.innerText = `${elem.text}`;
      buttons.append(buttonElem);

      buttonElem.onclick = (e) => {
        const settongsContainer = document.querySelector(
          ".settings"
        ) as HTMLElement;
        const mainContainer = document.querySelector(".main") as HTMLElement;
        const winnersBtn = document.getElementById("winners") as HTMLElement;
        if ((<HTMLElement>e.target).id === "winners") {
          settongsContainer.classList.add("non-active");
          mainContainer.classList.add("non-active");
          (<HTMLElement>e.target).classList.add("btn-non-active");
          //получаем контейнер страницы winners
          //const container = document.querySelector(".container") as HTMLElement;
        } else if ((<HTMLElement>e.target).id === "garage") {
          //const winnersPage = document.querySelector(".white") as HTMLElement;
          settongsContainer.classList.remove("non-active");
          mainContainer.classList.remove("non-active");
          //winnersPage.classList.add("non-active");
          //получаем контейнер страницы winners и добавляем ему класс нон-актив
          winnersBtn.classList.remove("btn-non-active");
        }
      };
    });
    this.container.append(buttons);
  }

  render() {
    this.renderHeader();

    return this.container;
  }
}

export { Header };
