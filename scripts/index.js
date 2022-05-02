//popup-edit profile
const openProfileFormButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_profile");
const closeFormButton = popupProfile.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileBreed = document.querySelector(".profile__about-me");
const formProfile = popupProfile.querySelector(".popup__form");
const inputName = formProfile.querySelector(".form__input_type_name");
const inputBreed = formProfile.querySelector(".form__input_type_about-me");
const buttonProfileSubmit = formProfile.querySelector(".form__submit");
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
//popup add card
const popupPhoto = document.querySelector(".popup_type_photo");
const popupPhotoImage = popupPhoto.querySelector(".popup__img");
const photoTitle = popupPhoto.querySelector(".popup__photo-title");
const popupPhotoCloseButton = popupPhoto.querySelector(".popup__close-button");
const cardsContainer = document.querySelector(".cards");
const openAddButton = document.querySelector(".profile__add-button");
const popupCards = document.querySelector(".popup_type_cards");
const popupCardCloseButton = popupCards.querySelector(".popup__close-button");
const formCard = popupCards.querySelector(".popup__form");
const buttonCardSubmit = formCard.querySelector(".form__submit");
//fill the form with profile info
function fillProfileForm() {
  inputName.value = profileName.textContent;
  inputBreed.value = profileBreed.textContent;
}
//open popupbox
const openPopup = (popup) => {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", hendelEscapeKey);
  popup.addEventListener("mousedown", hendelClickToEsc);
};
//close popupbox
const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", hendelEscapeKey);
  popup.removeEventListener("mousedown", hendelClickToEsc);
};

const selectors = {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};

const resetFormCard = () => {
  formCard.reset();
  enableButton(buttonCardSubmit, selectors);
};

const toggleClassName = (element, className) => {
  element.classList.toggle(className);
};

//create cards
function createCard(data) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  const trashButton = cardElement.querySelector(".card__trash-button");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardPhoto = cardElement.querySelector(".card__photo");
  cardTitle.textContent = data.name;
  cardPhoto.src = data.link;
  cardPhoto.alt = `Beautiful view of ${data.name}`;

  likeButton.addEventListener("click", () =>
    toggleClassName(likeButton, "card__like-button_active")
  );

  trashButton.addEventListener("click", function () {
    cardElement.remove();
  });

  cardPhoto.addEventListener("click", function () {
    popupPhotoImage.src = data.link;
    popupPhotoImage.alt = `Beautiful view of ${data.name}`;
    photoTitle.textContent = data.name;
    openPopup(popupPhoto);
  });

  return cardElement;
}
//add cards at the end of the list
initialCards.forEach((card) => {
  cardsContainer.append(createCard(card));
});

//submit popup edit profile
function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileBreed.textContent = inputBreed.value;
  closePopup(popupProfile);
}
//submit popup add card
function handleCardSubmit(e) {
  e.preventDefault();
  const inputTitle = document.querySelector(".form__input_type_title");
  const inputImage = document.querySelector(".form__input_type_image");

  const newCard = {
    name: inputTitle.value,
    link: inputImage.value,
  };

  cardsContainer.prepend(createCard(newCard));
  resetFormCard();
  closePopup(popupCards);
}

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

//call open and close popup box
openProfileFormButton.addEventListener("click", () => fillProfileForm());
openProfileFormButton.addEventListener("click", () => openPopup(popupProfile));
closeFormButton.addEventListener("click", () => closePopup(popupProfile));
popupPhotoCloseButton.addEventListener("click", () => closePopup(popupPhoto));
openAddButton.addEventListener("click", () => openPopup(popupCards));
popupCardCloseButton.addEventListener("click", () => closePopup(popupCards));
popupCardCloseButton.addEventListener("click", resetFormCard);
//call submit popup
formProfile.addEventListener("submit", handleProfileFormSubmit);
formCard.addEventListener("submit", handleCardSubmit);
