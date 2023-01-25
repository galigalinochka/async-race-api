//import { API } from "./API";
import { Component } from "../../../general/components/components";
import { Button } from "../../../general/components/ui";
import { carInnerHTML, flagInnerHTML } from "../../../general/components/car";

export class CarElement extends Component {
  id: string;
  name: string;
  color: string;
  stopButton: HTMLElement;
  startButton: HTMLElement;
  image!: HTMLElement | null;
  //defaultPosition = 100;
  //animationId = 0;

  static buttonText = {
    remove: "REMOVE",
    select: "SELECT",
    start: "A",
    stop: "B",
  };

  constructor(
    tagName: string,
    className: string,
    name: string,
    color: string,
    id: string
  ) {
    super(tagName, className);
    this.name = name;
    this.color = color;
    this.id = id;
    this.container.id = id;
    this.startButton = new Button(
      "button",
      "button-control",
      CarElement.buttonText.start
    ).render();
    this.stopButton = new Button(
      "button",
      "button-control",
      CarElement.buttonText.stop
    ).render();
  }

  renderCarButtons() {
    const removeButton = new Button(
      "button",
      "button-remove",
      CarElement.buttonText.remove
    ).render();
    removeButton.classList.add("button");
    const selectButton = new Button(
      "button",
      "button-select",
      CarElement.buttonText.select
    ).render();
    selectButton.classList.add("button");

    const btnContainer = document.createElement("div");
    btnContainer.className = "car-buttons-container";

    btnContainer.append(removeButton);
    btnContainer.append(selectButton);
    this.container.prepend(btnContainer);

    return btnContainer;
  }

  createCarName() {
    const btnContainer = this.renderCarButtons();
    const carName = document.createElement("span");
    carName.className = "car-name";
    carName.innerText = this.name;
    btnContainer.append(carName);
    return carName;
  }

  createCarImage() {
    const carImg = document.createElement("div");
    carImg.className = "car-img";
    carImg.innerHTML = carInnerHTML;

    const path = carImg.getElementsByTagName("path")[0];
    path.style.fill = this.color;

    return carImg;
  }

  createFlag() {
    const flag = document.createElement("div");
    flag.className = "flag";
    flag.innerHTML = flagInnerHTML;

    return flag;
  }

  createCarControlBlock() {
    const carControl = document.createElement("div");
    carControl.className = "car-control-container";
    const carImg = this.createCarImage();
    this.image = carImg;
    const flag = this.createFlag();
    carControl.prepend(this.startButton);
    carControl.append(this.stopButton);
    carControl.append(carImg);
    carControl.append(flag);
    this.container.append(carControl);

    return carControl;
  }

  render() {
    this.createCarName();
    this.createCarControlBlock();
    return this.container;
  }
}
