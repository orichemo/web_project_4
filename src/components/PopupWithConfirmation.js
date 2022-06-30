import { PopupWithForm } from "./PopupWithForm.js";

export class PopupWithConfirmation extends PopupWithForm {
  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmit();
    });
    super.setEventListeners();
  }

  setAction(action) {
    this._handleSubmit = action;
  }
}
