import { Component } from "../../../../general/components/components";
import { carInnerHTML } from "../../../../general/components/car";

class WinElement extends Component {
  private id: number;
  private color: string;
  private name: string;
  private wins: number;
  private time: number;

  constructor(
    tagName: string,
    className: string,
    id: number,
    color: string,
    name: string,
    wins: number,
    time: number
  ) {
    super(tagName, className);
    this.id = id;
    this.color = color;
    this.name = name;
    this.wins = wins;
    this.time = time;
  }

  createWinElement() {
    const number = document.createElement("span");
    number.className = "win-elem";
    number.innerText = `${this.id}`;

    const img = document.createElement("span");
    img.innerHTML = carInnerHTML;
    const g = document.getElementsByTagName("g")[0];
    g.style.fill = this.color;

    const carName = document.createElement("span");
    carName.innerText = this.name;
    carName.className = "win-elem";

    const winsCount = document.createElement("span");
    winsCount.innerText = `${this.wins}`;
    winsCount.className = "win-elem";

    const time = document.createElement("span");
    time.innerText = `${this.time}`;
    time.className = "win-elem";

    this.container.append(number);
    this.container.append(img);
    this.container.append(carName);
    this.container.append(winsCount);
    this.container.append(time);
  }

  render() {
    this.createWinElement();

    return this.container;
  }
}

export { WinElement };
