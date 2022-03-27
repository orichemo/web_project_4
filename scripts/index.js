const openFormButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileBreed = document.querySelector(".profile__about-me");
const inputName = document.querySelector(".popup__input_type_name");
const inputBreed = document.querySelector(".popup__input_type_about-me");

function toggleFormOpen() {
  inputName.value = profileName.textContent;
  inputBreed.value = profileBreed.textContent;
  popup.classList.toggle("popup_opened");
}

function toggleFormClose() {
  popup.classList.toggle("popup_opened");
}

openFormButton.addEventListener("click", toggleFormOpen);
closeButton.addEventListener("click", toggleFormClose);

let form = document.querySelector(".popup__form");

function handleFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileBreed.textContent = inputBreed.value;
  popup.classList.toggle("popup_opened");
}

form.addEventListener("submit", handleFormSubmit);

let likesButtons = document.querySelectorAll(".element__like-button");

for (let i = 0; i < likesButtons.length; i++) {
  let likeButton = likesButtons[i];
  likeButton.classList.remove("element__like-button_staus_active");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("element__like-button_staus_active");
  });
}
