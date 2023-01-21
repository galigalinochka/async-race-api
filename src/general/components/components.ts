export abstract class Component {
  protected container: HTMLElement;

  constructor(tagName = "div", className = "") {
    this.container = document.createElement(tagName);
    if (className) this.container.className = className;
  }

  render() {
    return this.container;
  }
}
