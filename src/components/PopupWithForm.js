import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupName, submitHandler) {
    super(popupName);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(this._form.querySelectorAll(".form__input"));
    this._submitButton = this._popup.querySelector(".form__button-save");
    this._textOnButton = this._submitButton.textContent;
  }
  _getInputValues() {
    const listInputsVelue = {};
    this._inputList.forEach((input) => {
      listInputsVelue[input.name] = input.value;
    });

    return listInputsVelue;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Saving...";
    } else {
      this._submitButton.textContent = this._textOnButton;
    }
  }
}
