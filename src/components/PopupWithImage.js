import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupName) {
    super(popupName);
    this._popupImg = this._popup.querySelector(".popup__img");
    this._popupPhotoTitle = this._popup.querySelector(".popup__photo-title");
  }

  open(name, link) {
    super.open();
    this._popupImg.src = link;
    this._popupImg.alt = `Beautiful view of ${name}`;
    this._popupPhotoTitle.textContent = name;
  }
}
