export class FormValidator {
  constructor(data, formElement) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formElement = formElement;
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (e) => e.preventDefault());
    this._setEventListeners();
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    const listInputs = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    listInputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(listInputs);
      });
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //called from utils.js - public.
  enableButton() {
    this._formElement
      .querySelector(this._submitButtonSelector)
      .classList.add(this._inactiveButtonClass);
    this._formElement.querySelector(this._submitButtonSelector).disabled = true;
  }

  _disableButton() {
    this._formElement
      .querySelector(this._submitButtonSelector)
      .classList.remove(this._inactiveButtonClass);
    this._formElement.querySelector(
      this._submitButtonSelector
    ).disabled = false;
  }

  _toggleButtonState(listInputs) {
    if (this._hasInvalidInput(listInputs)) {
      this.enableButton();
    } else {
      this._disableButton();
    }
  }
}
