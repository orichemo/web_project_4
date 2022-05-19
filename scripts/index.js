import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  fillProfileForm,
  openPopup,
  closePopup,
  resetFormCard,
  handleProfileFormSubmit,
  handleCardSubmit,
} from "./utils.js";

//popup-edit profile variables
const openProfileFormButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_profile");
const closeFormButton = popupProfile.querySelector(".popup__close-button");
const formProfile = popupProfile.querySelector(".popup__form");

//initial cards
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

//popup add card variables
const popupPhoto = document.querySelector(".popup_type_photo");
const popupPhotoCloseButton = popupPhoto.querySelector(".popup__close-button");
const cardsContainer = document.querySelector(".cards");
const openAddButton = document.querySelector(".profile__add-button");
const popupCards = document.querySelector(".popup_type_cards");
const popupCardCloseButton = popupCards.querySelector(".popup__close-button");
const formCard = popupCards.querySelector(".popup__form");

//validation variable
const validationData = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};
const formList = Array.from(document.querySelectorAll(".popup__form"));

//use class
initialCards.forEach((card) => {
  const newCard = new Card(card, "#card-template");
  const cardElement = newCard.generateCard();
  cardsContainer.append(cardElement);
});

formList.forEach((formElement) => {
  const form = new FormValidator(validationData, formElement);
  form.enableValidation();
});

//call open and close popup box
openProfileFormButton.addEventListener("click", () => fillProfileForm());
openProfileFormButton.addEventListener("click", () => openPopup(popupProfile));
closeFormButton.addEventListener("click", () => closePopup(popupProfile));
popupPhotoCloseButton.addEventListener("click", () => closePopup(popupPhoto));
openAddButton.addEventListener("click", () => openPopup(popupCards));
popupCardCloseButton.addEventListener("click", () => closePopup(popupCards));
popupCardCloseButton.addEventListener("click", () => resetFormCard());
//call submit popup
formProfile.addEventListener("submit", (e) => handleProfileFormSubmit(e));
formCard.addEventListener("submit", (e) => handleCardSubmit(e));
