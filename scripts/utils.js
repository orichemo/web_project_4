import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

//pfofile variables
const profileName = document.querySelector(".profile__name");
const profileBreed = document.querySelector(".profile__about-me");
const popupProfile = document.querySelector(".popup_type_profile");
const formProfile = popupProfile.querySelector(".popup__form");
const inputName = formProfile.querySelector(".form__input_type_name");
const inputBreed = formProfile.querySelector(".form__input_type_about-me");
//cards variables
const popupCards = document.querySelector(".popup_type_cards");
const formCard = popupCards.querySelector(".popup__form");
const cardsContainer = document.querySelector(".cards");
//validation variable
const selectors = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};

//fill the form with profile info
function fillProfileForm() {
  inputName.value = profileName.textContent;
  inputBreed.value = profileBreed.textContent;
}

const openPopup = (popup) => {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", hendelEscapeKey);
  popup.addEventListener("mousedown", hendelClickToEsc);
};

const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", hendelEscapeKey);
  popup.removeEventListener("mousedown", hendelClickToEsc);
};

const hendelEscapeKey = (e) => {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_open");
    closePopup(popup);
  }
};

const hendelClickToEsc = (e) => {
  if (e.target.classList.contains("popup")) {
    closePopup(e.target);
  }
};

const resetFormCard = () => {
  formCard.reset();
  new FormValidator(selectors, formCard).enableButton();
};

//submit profile form
const handleProfileFormSubmit = (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileBreed.textContent = inputBreed.value;
  closePopup(popupProfile);
};

//submit popup add card
const handleCardSubmit = (e) => {
  e.preventDefault();
  const inputTitle = document.querySelector(".form__input_type_title");
  const inputImage = document.querySelector(".form__input_type_image");

  const newCardInfo = {
    name: inputTitle.value,
    link: inputImage.value,
  };

  const newCard = new Card(newCardInfo, "#card-template");
  const cardElement = newCard.generateCard();
  cardsContainer.prepend(cardElement);
  resetFormCard();
  closePopup(popupCards);
};

export {
  fillProfileForm,
  openPopup,
  closePopup,
  resetFormCard,
  handleProfileFormSubmit,
  handleCardSubmit,
};