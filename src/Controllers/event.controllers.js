import Request from "./requisicao.controllers.js";

export default class Event {
  static submitLogin(event) {
    event.preventDefault();

    const formDeLogin = document.querySelector(".formDosInputs");
    const data = {};

    for (let i = 0; i < formDeLogin.length; i++) {
      const { name, value } = formDeLogin[i];
      if (name) {
        if (value === "") {
          return alert("Digite os dados de login");
        }
        data[name] = value;
      }
    }
    Request.login(data);
  }
}
