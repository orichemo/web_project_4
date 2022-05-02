const showInputError = (formElement, inputElement, errorMessage, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectors.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.errorClass);
};

const hideInputError = (formElement, inputElement, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.classList.remove(selectors.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      selectors
    );
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const enableButton = (button, selectors) => {
  button.classList.add(selectors.inactiveButtonClass);
  button.disabled = true;
};

const disableButton = (button, selectors) => {
  button.classList.remove(selectors.inactiveButtonClass);
  button.disabled = false;
};

const toggleButtonState = (inputList, buttonElement, selectors) => {
  if (hasInvalidInput(inputList)) {
    enableButton(buttonElement, selectors);
  } else {
    disableButton(buttonElement, selectors);
  }
};

const setEventListeners = (formElement, selectors) => {
  const listInputs = Array.from(
    formElement.querySelectorAll(selectors.inputSelector)
  );

  const buttonElement = formElement.querySelector(
    selectors.submitButtonSelector
  );
  listInputs.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, selectors);
      toggleButtonState(listInputs, buttonElement, selectors);
    });
  });
};

const enableValidation = (selectors) => {
  const formList = Array.from(
    document.querySelectorAll(selectors.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(formElement, selectors);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
});
