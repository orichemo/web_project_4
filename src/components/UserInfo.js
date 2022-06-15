export class UserInfo {
  constructor({ nameSelctor, jobSelctor }) {
    this._profileName = document.querySelector(nameSelctor);
    this._profileBreed = document.querySelector(jobSelctor);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileBreed.textContent,
    };
  }

  setUserInfo(name, job) {
    this._profileName.textContent = name;
    this._profileBreed.textContent = job;
  }
}
