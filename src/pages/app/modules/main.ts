import { Component } from "../../../general/components/components";
import { CarsBlock } from "./carsBlock";
import { Button } from "../../../general/components/ui";

class Main extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderTitle() {
    const title = document.createElement("h2");
    title.innerText = `Garage (${104})`;

    const subTitle = document.createElement("h3");
    subTitle.innerText = "Page #1";

    this.container.append(title);
    this.container.append(subTitle);
  }

  renderCars() {
    const carsListBlock = new CarsBlock("div", "main-container").render();
    this.container.append(carsListBlock);
  }

  renderFooter() {
    const Buttons = [
      { id: "button-prev", text: "PREV" },
      { id: "button-next", text: "NEXT" },
    ];
    const buttons = document.createElement("div");
    buttons.className = "pagination-container";
    Buttons.forEach((elem) => {
      const buttonElem = new Button("button", "button").render() as HTMLElement;
      buttonElem.id = `${elem.id}`;
      buttonElem.innerText = `${elem.text}`;
      buttons.append(buttonElem);
    });
    this.container.append(buttons);
  }

  render() {
    this.renderTitle();
    this.renderCars();
    this.renderFooter();

    return this.container;
  }
}

export { Main };
