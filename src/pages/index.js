import "./index.css";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { api } from "../utilis/Api";
import {
  openProfileFormButton,
  openAddButton,
  config,
  openEditAvatar,
} from "../utilis/constants.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation";

const formValidators = {};

const userInfo = new UserInfo({
  nameSelctor: ".profile__name",
  jobSelctor: ".profile__about-me",
});

const cards = new Section((card) => {
  cards.appendItem(createCard(card));
}, ".cards");

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData.name, userData.about, userData["_id"]);
    userInfo.setUserAvatar(userData.avatar);
    cards.renderCard(cardsData);
  })
  .catch(console.log);

function createCard(item) {
  const userId = userInfo.getUserInfo().id;
  const newCard = new Card(
    item,
    "#card-template",
    userId,
    () => {
      popupImage.open(item.name, item.link);
    },
    () => {
      popupDeleteCard.open();
      popupDeleteCard.setAction(() => {
        popupDeleteCard.renderLoading(true);
        api
          .deleteCard(item["_id"])
          .then(() => {
            newCard.clickToRemove();
            popupDeleteCard.close();
          })
          .catch(console.log)
          .finally(() => {
            popupDeleteCard.renderLoading(false);
          });
      });
    },
    () => {
      newCard.isLiked()
        ? api
            .unLikeCard(item["_id"])
            .then((res) => {
              newCard.updateLikes(res.likes);
            })
            .catch(console.log)
        : api
            .likeCard(item["_id"])
            .then((res) => {
              newCard.updateLikes(res.likes);
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
  api
    .patchUserProfile(data.name, data["about-me"])
    .then(() => {
      userInfo.setUserInfo(data.name, data["about-me"]);
      popupEditProfile.close();
    })
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
    .then((res) => {
      cards.prependItem(createCard(res));
      popupCard.close();
    })
    .catch(console.log)
    .finally(() => {
      popupCard.renderLoading(false);
    });
});

const popupImage = new PopupWithImage(".popup_type_photo");

const popupAvatar = new PopupWithForm(".popup_type_avatar", (data) => {
  popupAvatar.renderLoading(true);
  api
    .changeProfilePicture(data.avatar)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      popupAvatar.close();
    })
    .catch(console.log)
    .finally(() => {
      popupAvatar.renderLoading(false);
    });
});

const popupDeleteCard = new PopupWithConfirmation(".popup_type_delete");

popupEditProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();
popupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

//event listeners
openProfileFormButton.addEventListener("click", () => {
  const profileFormValidator = formValidators["edit-form"];
  profileFormValidator.hideError();
  profileFormValidator.enableButton();

  const initialInfo = userInfo.getUserInfo();
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
