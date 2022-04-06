//popup-edit profile
const openFormButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_profile");
const closeFormButton = popupProfile.querySelector(".popup__close-button");
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
//popup add card
const popupPhoto = document.querySelector(".popup_type_photo");
const photoWhenPop = popupPhoto.querySelector(".popup__img");
const photoTitle = popupPhoto.querySelector(".popup__photo-title");
const closePopupPhoto = popupPhoto.querySelector(".popup__close-button");
const cardsContainer = document.querySelector(".cards");
const openAddButton = document.querySelector(".profile__add-button");
const popupCards = document.querySelector(".popup_type_cards");
const closeButtonCards = popupCards.querySelector(".popup__close-button");
const formCard = popupCards.querySelector(".popup__form");
//fill the form with profile info
function fillFormWhenOpen() {
  inputName.value = profileName.textContent;
  inputBreed.value = profileBreed.textContent;
}
//open popupbox
const toggleOpen = (openBox) => {
  openBox.classList.toggle("popup_open");
};
//close popupbox
const toggleClose = (closeBox) => {
  closeBox.classList.toggle("popup_open");
};
//create cards
function createCard(data) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  const trashButton = cardElement.querySelector(".card__trash-button");
  cardElement.querySelector(".card__title").textContent = data.name;

  const cardPhoto = cardElement.querySelector(".card__photo");
  cardPhoto.src = data.link;
  cardPhoto.alt = `Beautiful view of ${data.name}`;

  likeButton.addEventListener("click", function (event) {
    event.target.classList.toggle("card__like-button_active");
  });

  trashButton.addEventListener("click", function () {
    cardElement.remove();
  });

  cardPhoto.addEventListener("click", function (event) {
    photoWhenPop.src = data.link;
    photoTitle.textContent = data.name;
    toggleOpen(popupPhoto);
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
  toggleClose(popupProfile);
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
  formCard.reset();

  toggleClose(popupCards);
}
//call open and close popup box
openFormButton.addEventListener("click", () => fillFormWhenOpen());
openFormButton.addEventListener("click", () => toggleOpen(popupProfile));
closeFormButton.addEventListener("click", () => toggleClose(popupProfile));
closePopupPhoto.addEventListener("click", () => toggleClose(popupPhoto));
openAddButton.addEventListener("click", () => toggleOpen(popupCards));
closeButtonCards.addEventListener("click", () => toggleClose(popupCards));
//call submit popup
formProfile.addEventListener("submit", handleProfileFormSubmit);
formCard.addEventListener("submit", handleCardSubmit);
