import { Component } from "../../../../general/components/components";
import { WinBlock } from "./winnersBlock";
import { Button } from "../../../../general/components/ui";

class WinnersPage extends Component {
  private WinnersBlock: WinBlock;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.WinnersBlock = new WinBlock("div", "winners-container");
  }

  renderTitle() {
    const title = document.createElement("h2");
    title.innerText = `Winners (${2})`;
    const subTitle = document.createElement("h3");
    subTitle.innerText = "Page #1";

    this.container.append(title);
    this.container.append(subTitle);
  }

  renderListHeader() {
    const listHeader = document.createElement("div");
    listHeader.className = "list-header";
    this.container.append(listHeader);
    const spans = ["Number", "Car", "Name", "Wins", "Best time(sec)"];
    spans.forEach((elem) => {
      const span = document.createElement("span");
      span.className = "win-header-elem";
      span.innerText = `${elem}`;
      listHeader.append(span);
    });
  }

  renderWinnersBtns() {
    const Buttons = [
      { id: "button-prev", text: "PREV" },
      { id: "button-next", text: "NEXT" },
    ];
    const buttons = document.createElement("div");
    buttons.className = "pagination-container";
    Buttons.forEach((elem) => {
      const buttonElem = new Button("button", "button").render() as HTMLElement;
      buttonElem.id = `${elem.id}`;
      buttonElem.innerText = `${elem.text}`;
      buttons.append(buttonElem);
    });
    this.container.append(buttons);
  }

  render() {
    this.renderTitle();
    this.renderListHeader();
    this.container.append(this.WinnersBlock.render());
    this.renderWinnersBtns();

    return this.container;
  }
}

export { WinnersPage };
