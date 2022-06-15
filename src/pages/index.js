import "./index.css";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import {
  openProfileFormButton,
  inputName,
  inputBreed,
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

const popupCard = new PopupWithForm(".popup_type_cards", (data) => {
  const newCard = new Card(
    { name: data["place-title"], link: data.image },
    "#card-template",
    () => {
      popupImage.open(data["place-title"], data.image);
    }
  );
  const cardElement = newCard.generateCard();
  initialCards.addNewItem(cardElement);
  formValidators["add-form"].disableButton();
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
      const newCard = new Card(card, "#card-template", () => {
        popupImage.open(card.name, card.link);
      });
      const cardElement = newCard.generateCard();
      initialCards.addInitialItems(cardElement);
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
  formValidators["edit-form"].hideError();
  formValidators["edit-form"].enableButton();

  const initialInfo = info.getUserInfo();
  inputName.value = initialInfo.name;
  inputBreed.value = initialInfo.job;

  popupEditProfile.open();
});

openAddButton.addEventListener("click", () => popupCard.open());
