import Request from "./requisicao.controllers.js";
import Modals from "../Models/modals.models.js";

export default class Event {
  static eventId = "";

  static submitLogin(e) {
    e.preventDefault();

    const formDeLogin = document.querySelector(".form-input__content");
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

  static removerErro() {
    const mensagemErro = document.querySelector(".modal__content");
    const btnRemoverErro = document.querySelector(".content__delete-button");
    btnRemoverErro.addEventListener("click", () => {
      mensagemErro.style.display = "none";
    });
  }

  static modal(e) {
    e.preventDefault();
    this.eventId = e.target.id;

    const container = document.querySelector(".modal__container");
    container.classList.remove("flat");

    const value = e.target.value;
    const modalScreen = document.querySelector(".modal-screen");
    modalScreen.classList.toggle("modal-open");

    if (value === "close") {
      const form = document.querySelector(".modal");
      Modals.bodyDocument.removeChild(form);
    } else {
      const title = document.querySelector(".modal-header__title");
      title.innerText = value;

      const form = Modals.creatStructure(value);
      Modals.bodyDocument.append(form);
    }
  }

  static modalDelete(e) {
    e.preventDefault();
    console.log(this.eventId);

    const value = e.target.value;
    const form = document.querySelector(".modal");

    const content = Modals.bodyDocument;
    content.removeChild(form);

    const title = document.querySelector(".modal-header__title");
    title.innerText = value;

    content.append(Modals.delete(this.targetId))
  }


  static returnModal(e) {
    e.preventDefault()

    const modalContainer = document.querySelector(".modal__container");
    modalContainer.classList.remove("flat");

    const content = Modals.bodyDocument;
    const form = document.querySelector(".modal");
    content.removeChild(form);

    content.append(Modals.editHabit());
  }

  static confirmDelete(e) {
    e.preventDefault()


  }
}
