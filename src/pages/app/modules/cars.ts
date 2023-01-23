import { CarElement } from "./carElement";
import { Component } from "../../../general/components/components";
import { ICar } from "../../../general/interfaces";

class Cars extends Component {
  cars: ICar[];

  constructor(tagName: string, className: string, cars: ICar[]) {
    super(tagName, className);
    this.cars = cars;
  }

  renderCarList() {
    this.cars.forEach((elem) => {
      const car = new CarElement(
        "div",
        "car-element",
        elem.name,
        elem.color,
        String(elem.id)
      );
      this.container.append(car.render());
    });
  }

  render() {
    this.renderCarList();

    return this.container;
  }
}

export { Cars };
