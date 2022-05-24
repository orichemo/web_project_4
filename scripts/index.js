import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

//popup-edit profile variables
const openProfileFormButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_profile");
const profileName = document.querySelector(".profile__name");
const profileBreed = document.querySelector(".profile__about-me");
const formProfile = popupProfile.querySelector(".popup__form");
const inputName = formProfile.querySelector(".form__input_type_name");
const inputBreed = formProfile.querySelector(".form__input_type_about-me");

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
const cardsContainer = document.querySelector(".cards");
const openAddButton = document.querySelector(".profile__add-button");
const popupCards = document.querySelector(".popup_type_cards");
const formCard = popupCards.querySelector(".popup__form");
const inputTitle = document.querySelector(".form__input_type_title");
const inputImage = document.querySelector(".form__input_type_image");
// close buttons
const closeButtons = document.querySelectorAll(".popup__close-button");
//validation variable
const config = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};
const formValidators = {};

//fill the form with profile info
function fillProfileForm() {
  inputName.value = profileName.textContent;
  inputBreed.value = profileBreed.textContent;
}

const resetFormCard = () => {
  formCard.reset();
  formValidators["add-form"].disableButton();
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

  const newCardInfo = {
    name: inputTitle.value,
    link: inputImage.value,
  };

  const cardElement = createCard(newCardInfo);
  cardsContainer.prepend(cardElement);
  resetFormCard();
  closePopup(popupCards);
};

const createCard = (card) => {
  const newCard = new Card(card, "#card-template");
  const cardElement = newCard.generateCard();
  return cardElement;
};

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardsContainer.append(cardElement);
});

const enableValidationForm = (config) => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    const validatorForm = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validatorForm;
    validatorForm.enableValidation();
  });
};
enableValidationForm(config);

//call open and close popup box
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

openProfileFormButton.addEventListener("click", () => {
  formValidators["edit-form"].hideError();
  formValidators["edit-form"].enableButton();
  fillProfileForm();
  openPopup(popupProfile);
});
openAddButton.addEventListener("click", () => openPopup(popupCards));
//call submit popup
formProfile.addEventListener("submit", (e) => handleProfileFormSubmit(e));
formCard.addEventListener("submit", (e) => handleCardSubmit(e));
