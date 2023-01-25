import { WinList } from "./winnerList";
import { Component } from "../../../../general/components/components";
import { API } from ".././API";

export enum Sort {
  ASC = "ASC",
  DESC = "DESC",
}

class WinBlock extends Component {
  winList: WinList;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.winList = new WinList("div", "win-list-container", []);
  }

  createWinList = async () => {
    const { winners, total } = await API.getWinners();
    this.winList = new WinList("div", "win-list-container", winners);
    this.container.append(this.winList.render());
    console.log(total);
  };

  render() {
    this.createWinList();

    return this.container;
  }
}

export { WinBlock };
