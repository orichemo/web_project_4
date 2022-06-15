import { Popup } from "./Popup.js";

const popupPhoto = document.querySelector(".popup_type_photo");
const popupImg = popupPhoto.querySelector(".popup__img");
const popupPhotoTitle = popupPhoto.querySelector(".popup__photo-title");

export class PopupWithImage extends Popup {
  constructor(popupName) {
    super(popupName);
  }

  open(profileName, link) {
    super.open();
    popupImg.src = link;
    popupImg.alt = `Beautiful view of ${profileName}`;
    popupPhotoTitle.textContent = profileName;
  }
}
