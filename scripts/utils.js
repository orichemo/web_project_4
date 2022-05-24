const openPopup = (popup) => {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", hendelEscapeKey);
  popup.addEventListener("mousedown", handleOverlay);
};

const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", hendelEscapeKey);
  popup.removeEventListener("mousedown", handleOverlay);
};

const hendelEscapeKey = (e) => {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_open");
    closePopup(popup);
  }
};

const handleOverlay = (e) => {
  if (e.target.classList.contains("popup")) {
    closePopup(e.target);
  }
};

export { openPopup, closePopup };
