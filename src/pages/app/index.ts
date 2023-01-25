//import { Pages } from "../../general/interfaces/index";
//import { CreateElem } from "../../general/components/ui";
import { Header } from "./modules/header";
import { Settings } from "./modules/settings";
import { Main } from "./modules/main";
import { WinnersPage } from "./modules/winnersPage/winners";
//import { CreateCarBlock } from "./modules/createCarBlock";

import "./style.css";

class App {
  private body: HTMLElement;
  header;
  settings;
  main;
  winnersPage;

  constructor() {
    this.body = document.body;
    this.header = new Header("header", "header");
    this.settings = new Settings("div", "settings");
    this.main = new Main("div", "main");
    this.winnersPage = new WinnersPage("div", "winners");
  }

  run() {
    this.body.className = "body";
    const container = document.createElement("div");
    container.className = "container";
    this.body.prepend(container);
    container.prepend(this.header.render());
    container.append(this.settings.render());
    container.append(this.main.render());
    container.append(this.winnersPage.render());
  }
}

export { App };
