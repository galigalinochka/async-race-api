import { Component } from "./components";

class CreateElem {
  element: HTMLElement | HTMLInputElement;
  selector: string;

  constructor(elem: string, selector: string) {
    this.element = document.createElement(elem);
    this.selector = selector;
  }

  setClassSelector(classSelector: string) {
    this.element.classList.add(classSelector);
  }

  setInnerText(text: string) {
    this.element.innerText = text;
  }

  getElement() {
    this.element.classList.add(this.selector);
    return this.element;
  }

  prependElement(element: HTMLElement) {
    this.element.prepend(element);
  }

  appendElement(element: HTMLElement) {
    this.element.append(element);
  }
}

class Button extends Component {
  constructor(tagName: string, className: string, text = "") {
    super(tagName, className);
    this.container.innerText = text;
    //this.container.classList.add("button");
  }

  render() {
    return this.container;
  }
}

export const enum CreateCarProps {
  className = "input-create-car",
  placeholder = "Enter car name",
  buttonId = "create-button",
}

class InputBlock extends Component {
  input: HTMLInputElement;
  inputColor: HTMLInputElement;
  button: HTMLButtonElement;

  constructor(tagName: string, className: string) {
    super(tagName, className);

    this.input = document.createElement("input");
    this.input.className = CreateCarProps.className;
    this.input.type = "text";
    this.input.placeholder = CreateCarProps.placeholder;

    this.inputColor = document.createElement("input");
    this.inputColor.type = "color";
    this.inputColor.value = "#ffffff";

    this.button = new Button(
      "button",
      "button",
      "CREATE CAR"
    ).render() as HTMLButtonElement;
    this.button.id = CreateCarProps.buttonId;
  }

  render() {
    this.container.append(this.input);
    this.container.append(this.inputColor);
    this.container.append(this.button);

    return this.container;
  }
}

export const enum UpdateCarProps {
  className = "input-update-car",
  buttonId = "update-button",
}

class UpdateInput extends InputBlock {
  constructor(tagName: string, className: string) {
    super(tagName, className);

    this.input.className = UpdateCarProps.className;
    this.input.placeholder = "";
    this.button = new Button(
      "button",
      "button",
      "UPDATE CAR"
    ).render() as HTMLButtonElement;
    this.button.id = UpdateCarProps.buttonId;
  }

  render() {
    this.container.append(this.input);
    this.container.append(this.inputColor);
    this.container.append(this.button);

    return this.container;
  }
}

export { CreateElem, Button, InputBlock, UpdateInput };
