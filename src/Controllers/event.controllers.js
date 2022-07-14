import Request from "./requisicao.controllers.js";
import Modals from "../Models/modals.models.js";

export default class Event {

  static submitLogin(event) {
    event.preventDefault();
 
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
    const value = e.target.value;
    const modalScreen = document.querySelector(".modal-screen");
    modalScreen.classList.toggle("modal-open");
    
    if (value === "close") {
      const form = document.querySelector(".modal");
      Modals.bodyDocument.removeChild(form) 
    } else {
      
      const title = document.querySelector(".modal-header__title");
      title.innerText = value;
      
      const form = Modals.creatStructure(value);
      Modals.bodyDocument.append(form);
    }
  }

  static logOutProfile(){
    window.location.replace('../../index.html')
    window.localStorage.clear()
  }

  static coletarDadosCriarHabitos(event){

    event.preventDefault();
    const getTitleValue = document.querySelector("#title");
    const getDescriptionValue = document.querySelector("#description");
    const getSelectValue = document.querySelector(".textArea");

    // retornar um Objeto com os valores coletados dos inputs
    const dadosColetados = {
      TitleValue: getTitleValue.value,
      DescriptionValue: getDescriptionValue.value,
      SelectValue: getSelectValue.value
    }
    console.log(dadosColetados);
  }
}
