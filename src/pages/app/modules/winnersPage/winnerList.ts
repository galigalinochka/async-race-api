import { IWinner } from "../../../../general/interfaces";
import { Component } from "../../../../general/components/components";
import { WinElement } from "./winnerElement";
import { API } from ".././API";

class WinList extends Component {
  winners: IWinner[];

  constructor(tagName: string, className: string, winners: IWinner[]) {
    super(tagName, className);
    this.winners = winners;
  }

  createWinList() {
    this.winners.forEach(async (elem) => {
      const car = await API.getCar(elem.id);
      const carHTML = new WinElement(
        "div",
        "win-elem-container",
        elem.id,
        car.color,
        car.name,
        elem.wins,
        elem.time
      );
      this.container.append(carHTML.render());
      console.log(this.container);
    });
  }

  render() {
    this.createWinList();
    return this.container;
  }
}

export { WinList };
