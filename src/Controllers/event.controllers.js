import Request from "./requisicao.controllers.js";
import Modals from "../Models/modals.models.js";
import Slider from "../Models/slider.models.js";

export default class Event {
  static submitLogin(e) {
    e.preventDefault();

    const formDeLogin = document.querySelector(".form-input__content");
    const data = {};

    for (let i = 0; i < formDeLogin.length; i++) {
      const { name, value } = formDeLogin[i];
      if (name) {
        if (value === "") {
          Slider.unsuccess("Insira seus dados de login")
        }
        data[name] = value;
      }
    }
    console.log("oi");
    Request.login(data);
  }

  static dropDown(e) {
    e.preventDefault()

    const content = document.querySelector(".dropdown-content");
    content.classList.toggle("dropdown-content--active");
  }

  static submitEditProfile(e) {
    e.preventDefault()

    const name = document.querySelector("#title").value;
    const url = document.querySelector("#modal__editImg").value;

    localStorage.setItem("@kenzie-habits: NomeDeUsuario", name);
    localStorage.setItem("@kenzie-habits: FotoDeUsuario", url);

    const body = {usr_name: name, usr_image: url}
    Request.editProfile(body);

    const modalScreen = document.querySelector(".modal-screen");
    modalScreen.classList.toggle("modal-open");

    setTimeout(() => {
      location.reload()
    }, 2000);
  }

  static expandContent(e) {
    e.preventDefault();

    Request.listHabits();
    setTimeout(() => {
      location.reload();
    }, 100);
  }

  static modal(e) {
    e.preventDefault();

    localStorage.setItem("@kenzie-habits: eventId", e.target.id);

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

  static submitHabit(e) {
    e.preventDefault();

    const getTitleValue = document.querySelector("#title");
    const getSelectValue = document.querySelector("select");
    const getDescriptionValue = document.querySelector("#description");
    const selectedValue = getSelectValue.options[
      getSelectValue.selectedIndex
    ].value.replace("ú", "u");
    // retornar um Objeto com os valores coletados dos inputs
    const dadosColetadosCriarHabitos = {
      habit_title: getTitleValue.value,
      habit_description: getDescriptionValue.value,
      habit_category: selectedValue,
    };

    const modalScreen = document.querySelector(".modal-screen");
    modalScreen.classList.toggle("modal-open");

    Request.createHabit(dadosColetadosCriarHabitos);
  }

  static updateHabit(e) {
    e.preventDefault();

    const getTitleValue = document.querySelector("#title");
    const getSelectValue = document.querySelector("select");
    const getDescriptionValue = document.querySelector("#description");
    const selectedValue = getSelectValue.options[
      getSelectValue.selectedIndex
    ].value.replace("ú", "u");
    // retornar um Objeto com os valores coletados dos inputs
    const dadosColetadosCriarHabitos = {
      habit_title: getTitleValue.value,
      habit_description: getDescriptionValue.value,
      habit_category: selectedValue,
    };

    const modalScreen = document.querySelector(".modal-screen");
    modalScreen.classList.toggle("modal-open");

    const id = localStorage.getItem("@kenzie-habits: eventId");
    Request.updateHabit(dadosColetadosCriarHabitos, id);
  }

  static submitEdition(e) {
    e.preventDefault();
  }

  static modalDelete(e) {
    e.preventDefault();

    const value = e.target.value;
    const form = document.querySelector(".modal");

    const content = Modals.bodyDocument;
    content.removeChild(form);

    const title = document.querySelector(".modal-header__title");
    title.innerText = value;

    content.append(Modals.delete(this.targetId));
  }

  static returnModal(e) {
    e.preventDefault();

    const modalContainer = document.querySelector(".modal__container");
    modalContainer.classList.remove("flat");

    const content = Modals.bodyDocument;
    const form = document.querySelector(".modal");
    content.removeChild(form);

    content.append(Modals.editHabit());
  }

  static filterAll(e) {
    e.preventDefault();

    Request.listHabits();
  }

  static filterComplete(e) {
    e.preventDefault();

    Request.listHabits(true);
  }

  static deleteHabit(e) {
    e.preventDefault();

    const id = localStorage.getItem("@kenzie-habits: eventId");
    Request.deleteHabit(id);

    const modalScreen = document.querySelector(".modal-screen");
    modalScreen.classList.toggle("modal-open");

    setTimeout(() => {
      localStorage.removeItem("@kenzie-habits: eventId");
    }, 500);
  }

  static reload(e) {
    e.preventDefault();

    location.reload();
  }

  static logOutProfile() {
    location.replace("../../index.html");
    localStorage.clear();
  }
}
