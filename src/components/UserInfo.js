export class UserInfo {
  constructor({ nameSelctor, jobSelctor }) {
    this._profileName = document.querySelector(nameSelctor);
    this._profileBreed = document.querySelector(jobSelctor);
    this._userAvatar = document.querySelector(".profile__avatar");
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileBreed.textContent,
      avatar: this._userAvatar.src,
      id: this._userId,
    };
  }

  setUserInfo(name, job, id) {
    this._profileName.textContent = name;
    this._profileBreed.textContent = job;
    this._userId = id;
  }

  setUserAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}
