import "./index.css";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { api } from "../components/Api";
import {
  openProfileFormButton,
  openAddButton,
  config,
  openEditAvatar,
} from "../utilis/constants.js";

const formValidators = {};

const info = new UserInfo({
  nameSelctor: ".profile__name",
  jobSelctor: ".profile__about-me",
});

const cards = new Section((card) => {
  cards.addInitialItems(createCard(card));
}, ".cards");

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    info.setUserInfo(userData.name, userData.about, userData["_id"]);
    info.setUserAvatar(userData.avatar);
    cards.renderCard(cardsData);
  })
  .catch(console.log);

function createCard(item) {
  const userId = info.getUserInfo().id;
  const newCard = new Card(
    item,
    "#card-template",
    userId,
    () => {
      popupImage.open(item.name, item.link);
    },
    () => {
      const popupDelete = new PopupWithForm(".popup_type_delete", () => {
        newCard.clickToRemove();
        api.deleteCard(item["_id"]);
      });
      popupDelete.open();
      popupDelete.setEventListeners();
    },
    () => {
      newCard.likeIsClicked()
        ? api
            .unLikeCard(item["_id"])
            .then((res) => {
              newCard.clickLike(res.likes);
            })
            .catch(console.log)
        : api
            .likeCard(item["_id"])
            .then((res) => {
              newCard.clickLike(res.likes);
            })
            .catch(console.log);
    }
  );

  const cardElement = newCard.generateCard();
  return cardElement;
}

//popups

const popupEditProfile = new PopupWithForm(".popup_type_profile", (data) => {
  popupEditProfile.renderLoading(true);
  info.setUserInfo(data.name, data["about-me"]);
  api
    .patchUserProfile(data.name, data["about-me"])
    .catch(console.log)
    .finally(() => {
      popupEditProfile.renderLoading(false);
    });
});

const popupCard = new PopupWithForm(".popup_type_cards", (data) => {
  popupCard.renderLoading(true);
  const newCard = { name: data["place-title"], link: data.image };
  api
    .createCard(newCard)
    .then((res) => cards.addNewItem(createCard(res)))
    .catch(console.log)
    .finally(() => {
      popupEditProfile.renderLoading(false);
    });
  popupCard.close();
});

const popupImage = new PopupWithImage(".popup_type_photo");

const popupAvatar = new PopupWithForm(".popup_type_avatar", (data) => {
  popupAvatar.renderLoading(true);
  api
    .changeProfilePicture(data.image)
    .then((res) => {
      info.setUserAvatar(res.avatar);
    })
    .catch(console.log)
    .finally(() => {
      popupAvatar.renderLoading(false);
    });
});

popupEditProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();
popupAvatar.setEventListeners();

//event listeners
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

openEditAvatar.addEventListener("click", () => {
  const avatarFormValidator = formValidators["avatar-form"];
  avatarFormValidator.enableButton();
  avatarFormValidator.hideError();
  popupAvatar.open();
});

//validation
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
