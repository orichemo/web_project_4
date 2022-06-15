export class Popup {
  constructor(popupName) {
    this._name = popupName;
    this._popup = document.querySelector(popupName);
    this._closeButton = this._popup.querySelector(".popup__close-button");
  }

  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keydown", (e) => this._handleEscClose(e));
    this._popup.addEventListener("mousedown", (e) => this._handleOverlay(e));
  }

  close() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keydown", (e) => this._handleEscClose(e));
    this._popup.removeEventListener("mousedown", (e) => this._handleOverlay(e));
  }

  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };
  _handleOverlay = (e) => {
    if (e.target.classList.contains("popup")) {
      this.close();
    }
  };

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
  }
}
