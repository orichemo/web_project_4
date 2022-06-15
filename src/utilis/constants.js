//popup-edit profile variables
const openProfileFormButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_profile");
const formProfile = popupProfile.querySelector(".popup__form");
const inputName = formProfile.querySelector(".form__input_type_name");
const inputBreed = formProfile.querySelector(".form__input_type_about-me");

//initial cards
const initialCardsData = [
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
const openAddButton = document.querySelector(".profile__add-button");

//validation variable
const config = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};

export {
  openProfileFormButton,
  inputName,
  inputBreed,
  initialCardsData,
  openAddButton,
  config,
};
