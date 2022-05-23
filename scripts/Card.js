import { openPopup } from "./utils.js";

const popupPhoto = document.querySelector(".popup_type_photo");
const popupImg = popupPhoto.querySelector(".popup__img");
const popupPhotoTitle = popupPhoto.querySelector(".popup__photo-title");

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
    this._likeButton = this._card.querySelector(".card__like-button");
    this._trashButton = this._card.querySelector(".card__trash-button");
    this._photoCard = this._card.querySelector(".card__photo");

    this._setEventListeners();

    this._photoCard.src = this._image;
    this._photoCard.alt = this._title;
    this._card.querySelector(".card__title").textContent = this._title;

    return this._card;
  }

  _setEventListeners() {
    //like button
    this._likeButton.addEventListener("click", () => this._clickLike());
    //trash button
    this._trashButton.addEventListener("click", () => this._clickToRemove());
    //popup photo
    this._photoCard.addEventListener("click", () => this._clickToLargeImage());
  }

  _clickLike() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _clickToRemove() {
    this._card.remove();
  }

  _clickToLargeImage() {
    popupImg.src = this._image;
    popupImg.alt = `Beautiful view of ${this._title}`;
    popupPhotoTitle.textContent = this._title;
    openPopup(popupPhoto);
  }
}
