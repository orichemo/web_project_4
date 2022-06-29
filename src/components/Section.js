export class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderCard(cards) {
    cards.forEach((card) => {
      this._renderer(card);
    });
  }

  addInitialItems(card) {
    this._container.append(card);
  }
  addNewItem(card) {
    this._container.prepend(card);
  }
}
