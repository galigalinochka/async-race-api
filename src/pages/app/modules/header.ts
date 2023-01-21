//import { CreateElem } from "../../../general/components/index";
import { Button } from "../../../general/components/index";
import { Component } from "../../../general/components/components";

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
      const buttonElem = new Button(
        "button",
        "button-link"
      ).render() as HTMLElement;
      buttonElem.id = `${elem.id}`;
      buttonElem.innerText = `${elem.text}`;
      buttons.append(buttonElem);
    });
    this.container.append(buttons);
  }

  render() {
    this.renderHeader();
    return this.container;
  }
}

export { Header };
