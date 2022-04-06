//popup-edit profile
const openProfileFormButton = document.querySelector(".profile__edit-button");
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
const popupPhotoImage = popupPhoto.querySelector(".popup__img");
const photoTitle = popupPhoto.querySelector(".popup__photo-title");
const popupPhotoCloseButton = popupPhoto.querySelector(".popup__close-button");
const cardsContainer = document.querySelector(".cards");
const openAddButton = document.querySelector(".profile__add-button");
const popupCards = document.querySelector(".popup_type_cards");
const popupCardCloseButton = popupCards.querySelector(".popup__close-button");
const formCard = popupCards.querySelector(".popup__form");
//fill the form with profile info
function fillProfileForm() {
  inputName.value = profileName.textContent;
  inputBreed.value = profileBreed.textContent;
}
//open popupbox
const popupOpen = (popup) => {
  popup.classList.add("popup_open");
};
//close popupbox
const popupClose = (popup) => {
  popup.classList.remove("popup_open");
};

const activeButton = (button, mod) => {
  button.classList.toggle(mod);
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
    activeButton(likeButton, "card__like-button_active")
  );

  trashButton.addEventListener("click", function () {
    cardElement.remove();
  });

  cardPhoto.addEventListener("click", function (event) {
    popupPhotoImage.src = data.link;
    popupPhotoImage.alt = `Beautiful view of ${data.name}`;
    photoTitle.textContent = data.name;
    popupOpen(popupPhoto);
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
  popupClose(popupProfile);
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

  popupClose(popupCards);
}
//call open and close popup box
openProfileFormButton.addEventListener("click", () => fillProfileForm());
openProfileFormButton.addEventListener("click", () => popupOpen(popupProfile));
closeFormButton.addEventListener("click", () => popupClose(popupProfile));
popupPhotoCloseButton.addEventListener("click", () => popupClose(popupPhoto));
openAddButton.addEventListener("click", () => popupOpen(popupCards));
popupCardCloseButton.addEventListener("click", () => popupClose(popupCards));
//call submit popup
formProfile.addEventListener("submit", handleProfileFormSubmit);
formCard.addEventListener("submit", handleCardSubmit);
