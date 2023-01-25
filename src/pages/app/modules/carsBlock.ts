import { Cars } from "./cars";
import { API } from "./API";
import { Component } from "../../../general/components/components";

class CarsBlock extends Component {
  carList: Cars;
  totalCount: number;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.carList = new Cars("div", "car-container", []);
    this.totalCount = 0;
  }

  createCarsList = async () => {
    const { cars, totalCount } = await API.getCars();
    this.carList = new Cars("div", "car-container", cars);
    this.container.append(this.carList.render());
    this.totalCount = totalCount;
    console.log(totalCount);
    console.log(this.totalCount);
    return { cars, totalCount };
  };

  render() {
    this.createCarsList();

    return this.container;
  }
}

export { CarsBlock };
