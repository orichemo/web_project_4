import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupName, submitHandler) {
    super(popupName);
    this._form = this._popup.querySelector(".popup__form");
    this._submitHandler = submitHandler;
    this._inputList = Array.from(this._form.querySelectorAll(".form__input"));
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
}
