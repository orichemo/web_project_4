export class Section {
  constructor({ data, renderer }, containerSelector) {
    this._data = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderer() {
    this._data.forEach((item) => {
      this._renderer(item);
    });
  }

  addInitialItems(item) {
    this._container.append(item);
  }
  addNewItem(item) {
    this._container.prepend(item);
  }
}
