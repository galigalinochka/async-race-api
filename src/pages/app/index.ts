//import { Pages } from "../../general/interfaces/index";
import { CreateElem } from "../../general/components";
import { Header } from "./modules/header";

import "./style.css";

class App {
  private body: HTMLElement;
  header;
  //main;

  constructor() {
    this.body = document.body;
    this.header = new Header("header", "header");
    //this.main = new Main();
  }

  run() {
    this.body.className = "body";
    const container = new CreateElem("div", "container").getElement();
    this.body.prepend(container);
    container.prepend(this.header.render());
  }
}

export { App };
