!function(){"use strict";class t{constructor(t,e,s){this._title=t.name,this._image=t.link,this._data=t,this._cardSelector=e,this._handleCardClick=s}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}generateCard(){return this._card=this._getTemplate(),this._likeButton=this._card.querySelector(".card__like-button"),this._trashButton=this._card.querySelector(".card__trash-button"),this._photoCard=this._card.querySelector(".card__photo"),this._setEventListeners(),this._photoCard.src=this._image,this._photoCard.alt=this._title,this._card.querySelector(".card__title").textContent=this._title,this._card}_setEventListeners(){this._likeButton.addEventListener("click",(()=>this._clickLike())),this._trashButton.addEventListener("click",(()=>this._clickToRemove())),this._photoCard.addEventListener("click",(()=>this._handleCardClick()))}_clickLike(){this._likeButton.classList.toggle("card__like-button_active")}_clickToRemove(){this._card.remove()}}function e(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class s{constructor(t){e(this,"_handleEscClose",(t=>{"Escape"===t.key&&this.close()})),e(this,"_handleOverlay",(t=>{t.target.classList.contains("popup")&&this.close()})),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button")}open(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("mousedown",this._handleOverlay)}close(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mousedown",this._handleOverlay)}setEventListeners(){this._closeButton.addEventListener("click",(()=>this.close()))}}class i extends s{constructor(t,e){super(t),this._form=this._popup.querySelector(".popup__form"),this._submitHandler=e,this._inputList=Array.from(this._form.querySelectorAll(".form__input"))}_getInputValues(){const t={};return this._inputList.forEach((e=>{t[e.name]=e.value})),t}setInputValues(t){this._inputList.forEach((e=>{e.value=t[e.name]}))}setEventListeners(){this._form.addEventListener("submit",(t=>{t.preventDefault(),this._submitHandler(this._getInputValues()),this.close()})),super.setEventListeners()}close(){super.close(),this._form.reset()}}class o{constructor(t,e){this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=e,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}enableValidation(){this._formElement.addEventListener("submit",(t=>t.preventDefault())),this._setEventListeners()}_showInputError(t,e){const s=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),s.textContent=e,s.classList.add(this._errorClass)}_hideInputError(t){const e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}_checkInputValidity(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}_setEventListeners(){this._inputList.forEach((t=>{t.addEventListener("input",(()=>{this._checkInputValidity(t),this._toggleButtonState()}))}))}_hasInvalidInput(){return this._inputList.some((t=>!t.validity.valid))}disableButton(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}enableButton(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}_toggleButtonState(){this._hasInvalidInput(this._inputList)?this.disableButton():this.enableButton()}hideError(){this._inputList.forEach((t=>{this._hideInputError(t)}))}}const r=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),a={},l=new class{constructor(t){let{nameSelctor:e,jobSelctor:s}=t;this._profileName=document.querySelector(e),this._profileBreed=document.querySelector(s)}getUserInfo(){return{name:this._profileName.textContent,job:this._profileBreed.textContent}}setUserInfo(t,e){this._profileName.textContent=t,this._profileBreed.textContent=e}}({nameSelctor:".profile__name",jobSelctor:".profile__about-me"}),c=new i(".popup_type_profile",(t=>{l.setUserInfo(t.name,t["about-me"])}));function u(e){return new t(e,"#card-template",(()=>{p.open(e.name,e.link)})).generateCard()}const _=new i(".popup_type_cards",(t=>{const e={name:t["place-title"],link:t.image};d.addNewItem(u(e)),_.close()})),p=new class extends s{constructor(t){super(t),this._popupImg=this._popup.querySelector(".popup__img"),this._popupPhotoTitle=this._popup.querySelector(".popup__photo-title")}open(t,e){super.open(),this._popupImg.src=e,this._popupImg.alt="Beautiful view of ".concat(t),this._popupPhotoTitle.textContent=t}}(".popup_type_photo");c.setEventListeners(),_.setEventListeners(),p.setEventListeners();const d=new class{constructor(t,e){let{data:s,renderer:i}=t;this._data=s,this._renderer=i,this._container=document.querySelector(e)}renderer(){this._data.forEach((t=>{this._renderer(t)}))}addInitialItems(t){this._container.append(t)}addNewItem(t){this._container.prepend(t)}}({data:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:t=>{d.addInitialItems(u(t))}},".cards");var h;d.renderer(),h={inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_disable",inputErrorClass:"popup__input_type_error",errorClass:"form__input-error_active"},Array.from(document.querySelectorAll(".popup__form")).forEach((t=>{const e=new o(h,t),s=t.getAttribute("name");a[s]=e,e.enableValidation()})),r.addEventListener("click",(()=>{const t=a["edit-form"];t.hideError(),t.enableButton();const e=l.getUserInfo(),s={name:e.name,"about-me":e.job};c.setInputValues(s),c.open()})),n.addEventListener("click",(()=>{const t=a["add-form"];t.disableButton(),t.hideError(),_.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDTkUsS0FBTSxpRENvQk4rRyxTQUFXTSxJQUNUWCxFQUFhUSxnQkFBZ0JkLEVBQVdpQixNQUc1QyxVQUs0QkMsTUFGOUJaLEVBQWFLLFdBRWlCTyxFRHJCZixDQUNiM0QsY0FBZSxlQUNmRSxxQkFBc0IsZ0JBQ3RCRSxvQkFBcUIsdUJBQ3JCRSxnQkFBaUIsMEJBQ2pCRSxXQUFZLDRCQ2lCS3RCLE1BQU1DLEtBQUt6QyxTQUFTMEMsaUJBQWlCLGlCQUM3Q0csU0FBU08sSUFDaEIsTUFBTThELEVBQWdCLElBQUkvRCxFQUFjOEQsRUFBUTdELEdBQzFDK0QsRUFBVy9ELEVBQVlnRSxhQUFhLFFBQzFDL0IsRUFBZThCLEdBQVlELEVBQzNCQSxFQUFjakQsc0JBS2xCa0IsRUFBc0J0RSxpQkFBaUIsU0FBUyxLQUM5QyxNQUFNd0csRUFBdUJoQyxFQUFlLGFBQzVDZ0MsRUFBcUJuQyxZQUNyQm1DLEVBQXFCcEMsZUFFckIsTUFBTXFDLEVBQWNoQyxFQUFLSyxjQUNuQnZHLEVBQU8sQ0FBRUssS0FBTTZILEVBQVk3SCxLQUFNLFdBQVk2SCxFQUFZMUIsS0FDL0RFLEVBQWlCOUMsZUFBZTVELEdBRWhDMEcsRUFBaUJsRSxVQUduQndELEVBQWN2RSxpQkFBaUIsU0FBUyxLQUN0QyxNQUFNMEcsRUFBb0JsQyxFQUFlLFlBQ3pDa0MsRUFBa0J4QyxnQkFDbEJ3QyxFQUFrQnJDLFlBRWxCZ0IsRUFBVXRFLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy91dGlsaXMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgY2FyZFNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcclxuICAgIHRoaXMuX3RpdGxlID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5faW1hZ2UgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9jYXJkID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIik7XHJcbiAgICB0aGlzLl90cmFzaEJ1dHRvbiA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190cmFzaC1idXR0b25cIik7XHJcbiAgICB0aGlzLl9waG90b0NhcmQgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fcGhvdG9cIik7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICB0aGlzLl9waG90b0NhcmQuc3JjID0gdGhpcy5faW1hZ2U7XHJcbiAgICB0aGlzLl9waG90b0NhcmQuYWx0ID0gdGhpcy5fdGl0bGU7XHJcbiAgICB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIikudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY2FyZDtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIC8vbGlrZSBidXR0b25cclxuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2NsaWNrTGlrZSgpKTtcclxuICAgIC8vdHJhc2ggYnV0dG9uXHJcbiAgICB0aGlzLl90cmFzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5fY2xpY2tUb1JlbW92ZSgpKTtcclxuICAgIC8vcG9wdXAgcGhvdG9cclxuICAgIHRoaXMuX3Bob3RvQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlQ2FyZENsaWNrKCkpO1xyXG4gIH1cclxuXHJcbiAgX2NsaWNrTGlrZSgpIHtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIF9jbGlja1RvUmVtb3ZlKCkge1xyXG4gICAgdGhpcy5fY2FyZC5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cE5hbWUpIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cE5hbWUpO1xyXG4gICAgdGhpcy5fY2xvc2VCdXR0b24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZS1idXR0b25cIik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5cIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX2hhbmRsZU92ZXJsYXkpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlblwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIHRoaXMuX3BvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5faGFuZGxlT3ZlcmxheSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIF9oYW5kbGVPdmVybGF5ID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cFwiKSkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBOYW1lLCBzdWJtaXRIYW5kbGVyKSB7XHJcbiAgICBzdXBlcihwb3B1cE5hbWUpO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XHJcbiAgICB0aGlzLl9zdWJtaXRIYW5kbGVyID0gc3VibWl0SGFuZGxlcjtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpKTtcclxuICB9XHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgY29uc3QgbGlzdElucHV0c1ZlbHVlID0ge307XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgbGlzdElucHV0c1ZlbHVlW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbGlzdElucHV0c1ZlbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZXMoZGF0YSkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gZGF0YVtpbnB1dC5uYW1lXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRIYW5kbGVyKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGRhdGEuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gZGF0YS5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBkYXRhLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBkYXRhLmlucHV0RXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBkYXRhLmVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxyXG4gICAgKTtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfaGFzSW52YWxpZElucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vY2FsbGVkIGZyb20gaW5kZXguanMgLSBwdWJsaWMuXHJcbiAgZGlzYWJsZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGVuYWJsZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KHRoaXMuX2lucHV0TGlzdCkpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVuYWJsZUJ1dHRvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZUVycm9yKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vcG9wdXAtZWRpdCBwcm9maWxlIHZhcmlhYmxlc1xyXG5jb25zdCBvcGVuUHJvZmlsZUZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xyXG5cclxuLy9pbml0aWFsIGNhcmRzXHJcbmNvbnN0IGluaXRpYWxDYXJkc0RhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuLy9wb3B1cCBhZGQgY2FyZCB2YXJpYWJsZXNcclxuY29uc3Qgb3BlbkFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcclxuXHJcbi8vdmFsaWRhdGlvbiB2YXJpYWJsZVxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybV9faW5wdXRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybV9fc3VibWl0XCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJmb3JtX19zdWJtaXRfZGlzYWJsZVwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXQtZXJyb3JfYWN0aXZlXCIsXHJcbn07XHJcblxyXG5leHBvcnQgeyBvcGVuUHJvZmlsZUZvcm1CdXR0b24sIGluaXRpYWxDYXJkc0RhdGEsIG9wZW5BZGRCdXR0b24sIGNvbmZpZyB9O1xyXG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgeyBQb3B1cFdpdGhGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCB7IFBvcHVwV2l0aEltYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IHtcclxuICBvcGVuUHJvZmlsZUZvcm1CdXR0b24sXHJcbiAgaW5pdGlhbENhcmRzRGF0YSxcclxuICBvcGVuQWRkQnV0dG9uLFxyXG4gIGNvbmZpZyxcclxufSBmcm9tIFwiLi4vdXRpbGlzL2NvbnN0YW50cy5qc1wiO1xyXG5cclxuY29uc3QgZm9ybVZhbGlkYXRvcnMgPSB7fTtcclxuXHJcbmNvbnN0IGluZm8gPSBuZXcgVXNlckluZm8oe1xyXG4gIG5hbWVTZWxjdG9yOiBcIi5wcm9maWxlX19uYW1lXCIsXHJcbiAgam9iU2VsY3RvcjogXCIucHJvZmlsZV9fYWJvdXQtbWVcIixcclxufSk7XHJcblxyXG5jb25zdCBwb3B1cEVkaXRQcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfdHlwZV9wcm9maWxlXCIsIChkYXRhKSA9PiB7XHJcbiAgaW5mby5zZXRVc2VySW5mbyhkYXRhLm5hbWUsIGRhdGFbXCJhYm91dC1tZVwiXSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChpdGVtKSB7XHJcbiAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKGl0ZW0sIFwiI2NhcmQtdGVtcGxhdGVcIiwgKCkgPT4ge1xyXG4gICAgcG9wdXBJbWFnZS5vcGVuKGl0ZW0ubmFtZSwgaXRlbS5saW5rKTtcclxuICB9KTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcbmNvbnN0IHBvcHVwQ2FyZCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwX3R5cGVfY2FyZHNcIiwgKGRhdGEpID0+IHtcclxuICBjb25zdCBuZXdDYXJkID0geyBuYW1lOiBkYXRhW1wicGxhY2UtdGl0bGVcIl0sIGxpbms6IGRhdGEuaW1hZ2UgfTtcclxuICBpbml0aWFsQ2FyZHMuYWRkTmV3SXRlbShjcmVhdGVDYXJkKG5ld0NhcmQpKTtcclxuICBwb3B1cENhcmQuY2xvc2UoKTtcclxufSk7XHJcblxyXG5jb25zdCBwb3B1cEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLnBvcHVwX3R5cGVfcGhvdG9cIik7XHJcblxyXG5wb3B1cEVkaXRQcm9maWxlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVwQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5wb3B1cEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICBkYXRhOiBpbml0aWFsQ2FyZHNEYXRhLFxyXG4gICAgcmVuZGVyZXI6IChjYXJkKSA9PiB7XHJcbiAgICAgIGluaXRpYWxDYXJkcy5hZGRJbml0aWFsSXRlbXMoY3JlYXRlQ2FyZChjYXJkKSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgXCIuY2FyZHNcIlxyXG4pO1xyXG5cclxuaW5pdGlhbENhcmRzLnJlbmRlcmVyKCk7XHJcblxyXG5jb25zdCBlbmFibGVWYWxpZGF0aW9uRm9ybSA9IChjb25maWcpID0+IHtcclxuICBjb25zdCBmb3JtTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fZm9ybVwiKSk7XHJcbiAgZm9ybUxpc3QuZm9yRWFjaCgoZm9ybUVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRvckZvcm0gPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGZvcm1FbGVtZW50KTtcclxuICAgIGNvbnN0IGZvcm1OYW1lID0gZm9ybUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcclxuICAgIGZvcm1WYWxpZGF0b3JzW2Zvcm1OYW1lXSA9IHZhbGlkYXRvckZvcm07XHJcbiAgICB2YWxpZGF0b3JGb3JtLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuICB9KTtcclxufTtcclxuZW5hYmxlVmFsaWRhdGlvbkZvcm0oY29uZmlnKTtcclxuXHJcbm9wZW5Qcm9maWxlRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2ZpbGVGb3JtVmFsaWRhdG9yID0gZm9ybVZhbGlkYXRvcnNbXCJlZGl0LWZvcm1cIl07XHJcbiAgcHJvZmlsZUZvcm1WYWxpZGF0b3IuaGlkZUVycm9yKCk7XHJcbiAgcHJvZmlsZUZvcm1WYWxpZGF0b3IuZW5hYmxlQnV0dG9uKCk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxJbmZvID0gaW5mby5nZXRVc2VySW5mbygpO1xyXG4gIGNvbnN0IGRhdGEgPSB7IG5hbWU6IGluaXRpYWxJbmZvLm5hbWUsIFwiYWJvdXQtbWVcIjogaW5pdGlhbEluZm8uam9iIH07XHJcbiAgcG9wdXBFZGl0UHJvZmlsZS5zZXRJbnB1dFZhbHVlcyhkYXRhKTtcclxuXHJcbiAgcG9wdXBFZGl0UHJvZmlsZS5vcGVuKCk7XHJcbn0pO1xyXG5cclxub3BlbkFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGNhcmRGb3JtVmFsaWRhdG9yID0gZm9ybVZhbGlkYXRvcnNbXCJhZGQtZm9ybVwiXTtcclxuICBjYXJkRm9ybVZhbGlkYXRvci5kaXNhYmxlQnV0dG9uKCk7XHJcbiAgY2FyZEZvcm1WYWxpZGF0b3IuaGlkZUVycm9yKCk7XHJcblxyXG4gIHBvcHVwQ2FyZC5vcGVuKCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGN0b3IsIGpvYlNlbGN0b3IgfSkge1xyXG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxjdG9yKTtcclxuICAgIHRoaXMuX3Byb2ZpbGVCcmVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioam9iU2VsY3Rvcik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50LFxyXG4gICAgICBqb2I6IHRoaXMuX3Byb2ZpbGVCcmVlZC50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyhuYW1lLCBqb2IpIHtcclxuICAgIHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRoaXMuX3Byb2ZpbGVCcmVlZC50ZXh0Q29udGVudCA9IGpvYjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwTmFtZSkge1xyXG4gICAgc3VwZXIocG9wdXBOYW1lKTtcclxuICAgIHRoaXMuX3BvcHVwSW1nID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1nXCIpO1xyXG4gICAgdGhpcy5fcG9wdXBQaG90b1RpdGxlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fcGhvdG8tdGl0bGVcIik7XHJcbiAgfVxyXG5cclxuICBvcGVuKG5hbWUsIGxpbmspIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIHRoaXMuX3BvcHVwSW1nLnNyYyA9IGxpbms7XHJcbiAgICB0aGlzLl9wb3B1cEltZy5hbHQgPSBgQmVhdXRpZnVsIHZpZXcgb2YgJHtuYW1lfWA7XHJcbiAgICB0aGlzLl9wb3B1cFBob3RvVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBkYXRhLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJlcigpIHtcclxuICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkSW5pdGlhbEl0ZW1zKGl0ZW0pIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmQoaXRlbSk7XHJcbiAgfVxyXG4gIGFkZE5ld0l0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoaXRlbSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiY29uc3RydWN0b3IiLCJkYXRhIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwidGhpcyIsIl90aXRsZSIsIm5hbWUiLCJfaW1hZ2UiLCJsaW5rIiwiX2RhdGEiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsIl9nZXRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJnZW5lcmF0ZUNhcmQiLCJfY2FyZCIsIl9saWtlQnV0dG9uIiwiX3RyYXNoQnV0dG9uIiwiX3Bob3RvQ2FyZCIsIl9zZXRFdmVudExpc3RlbmVycyIsInNyYyIsImFsdCIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9jbGlja0xpa2UiLCJfY2xpY2tUb1JlbW92ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsIlBvcHVwIiwicG9wdXBOYW1lIiwiZSIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJfcG9wdXAiLCJfY2xvc2VCdXR0b24iLCJvcGVuIiwiYWRkIiwiX2hhbmRsZUVzY0Nsb3NlIiwiX2hhbmRsZU92ZXJsYXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJQb3B1cFdpdGhGb3JtIiwic3VibWl0SGFuZGxlciIsInN1cGVyIiwiX2Zvcm0iLCJfc3VibWl0SGFuZGxlciIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2dldElucHV0VmFsdWVzIiwibGlzdElucHV0c1ZlbHVlIiwiZm9yRWFjaCIsImlucHV0IiwidmFsdWUiLCJzZXRJbnB1dFZhbHVlcyIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJGb3JtVmFsaWRhdG9yIiwiZm9ybUVsZW1lbnQiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsZW1lbnQiLCJfc3VibWl0QnV0dG9uIiwiZW5hYmxlVmFsaWRhdGlvbiIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJzb21lIiwiZGlzYWJsZUJ1dHRvbiIsImRpc2FibGVkIiwiZW5hYmxlQnV0dG9uIiwiaGlkZUVycm9yIiwib3BlblByb2ZpbGVGb3JtQnV0dG9uIiwib3BlbkFkZEJ1dHRvbiIsImZvcm1WYWxpZGF0b3JzIiwiaW5mbyIsIm5hbWVTZWxjdG9yIiwiam9iU2VsY3RvciIsIl9wcm9maWxlTmFtZSIsIl9wcm9maWxlQnJlZWQiLCJnZXRVc2VySW5mbyIsImpvYiIsInNldFVzZXJJbmZvIiwicG9wdXBFZGl0UHJvZmlsZSIsImNyZWF0ZUNhcmQiLCJpdGVtIiwicG9wdXBJbWFnZSIsInBvcHVwQ2FyZCIsIm5ld0NhcmQiLCJpbWFnZSIsImluaXRpYWxDYXJkcyIsImFkZE5ld0l0ZW0iLCJfcG9wdXBJbWciLCJfcG9wdXBQaG90b1RpdGxlIiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJhZGRJbml0aWFsSXRlbXMiLCJhcHBlbmQiLCJwcmVwZW5kIiwiY2FyZCIsImNvbmZpZyIsInZhbGlkYXRvckZvcm0iLCJmb3JtTmFtZSIsImdldEF0dHJpYnV0ZSIsInByb2ZpbGVGb3JtVmFsaWRhdG9yIiwiaW5pdGlhbEluZm8iLCJjYXJkRm9ybVZhbGlkYXRvciJdLCJzb3VyY2VSb290IjoiIn0=