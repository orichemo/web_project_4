export class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderCard(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  appendItem(item) {
    this._container.append(item);
  }
  prependItem(item) {
    this._container.prepend(item);
  }
}
