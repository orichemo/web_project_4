class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _customFetch(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._customFetch);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._customFetch);
  }

  patchUserProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._customFetch);
  }

  createCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._customFetch);
  }

  deleteCard(id) {
    fetch(`https://around.nomoreparties.co/v1/cohort-3-en/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  likeCard(id) {
    return fetch(
      `https://around.nomoreparties.co/v1/cohort-3-en/cards/likes/${id}`,
      {
        method: "PUT",
        headers: this._headers,
      }
    ).then(this._customFetch);
  }

  unLikeCard(id) {
    return fetch(
      `https://around.nomoreparties.co/v1/cohort-3-en/cards/likes/${id}`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then(this._customFetch);
  }

  changeProfilePicture(link) {
    return fetch(
      `https://around.nomoreparties.co/v1/cohort-3-en/users/me/avatar`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: link,
        }),
      }
    ).then(this._customFetch);
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "3b82c4e5-0fac-48ec-9210-bfe6ee07c30f",
    "Content-Type": "application/json",
  },
});
