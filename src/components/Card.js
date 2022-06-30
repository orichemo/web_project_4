export class Card {
  constructor(
    data,
    cardSelector,
    userId,
    handleCardClick,
    handleDeleteButton,
    handleLikeClick
  ) {
    this._title = data.name;
    this._image = data.link;
    this._data = data;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeClick = handleLikeClick;
    this._likes = this._data.likes; //array of likes
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
    this._likeCounter = this._card.querySelector(".card__like-counter");
    this._setEventListeners();
    this._photoCard.src = this._image;
    this._photoCard.alt = this._title;
    this._card.querySelector(".card__title").textContent = this._title;
    this._renderLikes();
    if (this._data.owner["_id"] !== this._userId) {
      this._trashButton.removeEventListener("click", this._handleDeleteButton);
      this._trashButton.style = "display: none";
    }
    return this._card;
  }

  _setEventListeners() {
    //like button
    this._likeButton.addEventListener("click", this._handleLikeClick);
    //popup photo
    this._photoCard.addEventListener("click", () => this._handleCardClick());
    //trash button
    this._trashButton.addEventListener("click", this._handleDeleteButton);
  }

  updateLikes(likes) {
    this._likes = likes;
    this._renderLikes();
  }

  _renderLikes() {
    this._likeCounter.textContent = this._likes.length;

    if (this.isLiked()) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  isLiked() {
    const userLike = this._likes
      .map((user) => user["_id"])
      .find((id) => id === this._userId);

    return userLike;
  }

  clickToRemove() {
    this._card.remove();
    this._card.null;
  }
}
