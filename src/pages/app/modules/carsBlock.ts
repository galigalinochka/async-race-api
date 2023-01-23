import { Cars } from "./cars";
import { API } from "./API";
import { Component } from "../../../general/components/components";

class CarsBlock extends Component {
  carList: Cars;
  total: string | null;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.carList = new Cars("div", "car-container", []);
    this.total = "0";
  }

  createCarsList = async () => {
    const { cars, totalCount } = await API.getCars();
    this.total = totalCount;

    this.carList = new Cars("div", "car-container", cars);
    this.container.append(this.carList.render());
  };

  render() {
    this.createCarsList();

    return this.container;
  }
}

export { CarsBlock };
