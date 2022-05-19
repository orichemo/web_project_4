import { openPopup } from "./utils.js";

export class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();

    this._card.querySelector(".card__photo").src = this._image;
    this._card.querySelector(".card__title").textContent = this._title;

    return this._card;
  }

  _setEventListeners() {
    //like button
    this._card
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._clickLike());
    //trash button
    this._card
      .querySelector(".card__trash-button")
      .addEventListener("click", () => this._clickToRemove());
    //popup photo 
    this._card
      .querySelector(".card__photo")
      .addEventListener("click", () => this._clickToLargeImage());
  }

  _clickLike() {
    this._card
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _clickToRemove() {
    this._card.remove();
  }

  _clickToLargeImage() {
    document.querySelector(".popup__img").src = this._image;
    document.querySelector(
      ".popup__img"
    ).alt = `Beautiful view of ${this._title}`;
    document.querySelector(".popup__photo-title").textContent = this._title;
    openPopup(document.querySelector(".popup_type_photo"));
  }
}
