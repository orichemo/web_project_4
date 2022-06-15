import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupName, submitHandler) {
    super(popupName);
    this._form = this._popup.querySelector(".popup__form");
    this._submitHandler = submitHandler;
  }
  _getInputValues() {
    const listInputs = Array.from(this._form.querySelectorAll(".form__input"));
    const listInputsVelue = {};
    listInputs.forEach((input) => {
      listInputsVelue[input.name] = input.value;
    });

    return listInputsVelue;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
      this._form.reset();
    });
    super.setEventListeners();
  }

  close() {
    super.close();
  }
}
