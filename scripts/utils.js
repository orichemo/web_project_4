const openPopup = (popup) => {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", handleOverlay);
  popup.addEventListener("mousedown", hendelClickToEsc);
};

const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", handleOverlay);
  popup.removeEventListener("mousedown", hendelClickToEsc);
};

const handleOverlay = (e) => {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_open");
    closePopup(popup);
  }
};

const hendelClickToEsc = (e) => {
  if (e.target.classList.contains("popup")) {
    closePopup(e.target);
  }
};

export {
  openPopup,
  closePopup,
};