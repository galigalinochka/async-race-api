import { WinList } from "./winnerList";
import { Component } from "../../../../general/components/components";
import { API } from ".././API";

export enum Sort {
  ASC = "ASC",
  DESC = "DESC",
}

class WinBlock extends Component {
  winList: WinList;
  total: number;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.winList = new WinList("div", "win-list-container", []);
    this.total = 0;
  }

  createWinList = async () => {
    const { winners, total } = await API.getWinners();
    this.winList = new WinList("div", "win-list-container", winners);
    this.container.append(this.winList.render());

    return { winners, total };
  };

  render() {
    this.createWinList();

    return this.container;
  }
}

export { WinBlock };
