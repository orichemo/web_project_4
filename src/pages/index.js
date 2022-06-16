import "./index.css";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import {
  openProfileFormButton,
  initialCardsData,
  openAddButton,
  config,
} from "../utilis/constants.js";

const formValidators = {};

const info = new UserInfo({
  nameSelctor: ".profile__name",
  jobSelctor: ".profile__about-me",
});

const popupEditProfile = new PopupWithForm(".popup_type_profile", (data) => {
  info.setUserInfo(data.name, data["about-me"]);
});

function createCard(item) {
  const newCard = new Card(item, "#card-template", () => {
    popupImage.open(item.name, item.link);
  });
  const cardElement = newCard.generateCard();
  return cardElement;
}
const popupCard = new PopupWithForm(".popup_type_cards", (data) => {
  const newCard = { name: data["place-title"], link: data.image };
  initialCards.addNewItem(createCard(newCard));
  popupCard.close();
});

const popupImage = new PopupWithImage(".popup_type_photo");

popupEditProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();

const initialCards = new Section(
  {
    data: initialCardsData,
    renderer: (card) => {
      initialCards.addInitialItems(createCard(card));
    },
  },
  ".cards"
);

initialCards.renderer();

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

openProfileFormButton.addEventListener("click", () => {
  const profileFormValidator = formValidators["edit-form"];
  profileFormValidator.hideError();
  profileFormValidator.enableButton();

  const initialInfo = info.getUserInfo();
  const data = { name: initialInfo.name, "about-me": initialInfo.job };
  popupEditProfile.setInputValues(data);

  popupEditProfile.open();
});

openAddButton.addEventListener("click", () => {
  const cardFormValidator = formValidators["add-form"];
  cardFormValidator.disableButton();
  cardFormValidator.hideError();

  popupCard.open();
});
