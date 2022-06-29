//popup-edit profile variables
const openProfileFormButton = document.querySelector(".profile__edit-button");

//popup add card variables
const openAddButton = document.querySelector(".profile__add-button");

//popup change profile picture

const openEditAvatar = document.querySelector(".profile__edit-picture");

//validation variable
const config = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};

export { openProfileFormButton, openAddButton, config, openEditAvatar };
