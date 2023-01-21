import {
  InputBlock,
  UpdateInput,
  Button,
} from "../../../general/components/ui";
import { Component } from "../../../general/components/components";

const Buttons = [
  { id: "race-button", text: "RACE" },
  { id: "reset-button", text: "RESET" },
  { id: "generate-cars-button", text: "GENERATE CARS" },
];

class Settings extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderInputBlock() {
    const inputBlock = new InputBlock("div", "input-block").render();
    this.container.append(inputBlock);
  }

  renderUpdateBlock() {
    const UpdateBlock = new UpdateInput("div", "update-block").render();
    this.container.append(UpdateBlock);
  }

  renderButtonsBlock() {
    const buttons = document.createElement("div");
    buttons.className = "buttons-container";
    Buttons.forEach((elem) => {
      const buttonElem = new Button("button", "button").render() as HTMLElement;
      buttonElem.id = `${elem.id}`;
      buttonElem.innerText = `${elem.text}`;
      buttons.append(buttonElem);
    });
    this.container.append(buttons);
  }

  render() {
    this.renderInputBlock();
    this.renderUpdateBlock();
    this.renderButtonsBlock();
    return this.container;
  }
}

export { Settings };
