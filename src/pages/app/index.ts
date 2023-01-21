//import { Pages } from "../../general/interfaces/index";
import { CreateElem } from "../../general/components/ui";
import { Header } from "./modules/header";
import { Settings } from "./modules/settings";
import { Main } from "./modules/main";

import "./style.css";

class App {
  private body: HTMLElement;
  header;
  settings;
  main;

  constructor() {
    this.body = document.body;
    this.header = new Header("header", "header");
    this.settings = new Settings("div", "settings");
    this.main = new Main("div", "main");
  }

  run() {
    this.body.className = "body";
    const container = new CreateElem("div", "container").getElement();
    this.body.prepend(container);
    container.prepend(this.header.render());
    container.append(this.settings.render());
    container.append(this.main.render());
  }
}

export { App };
