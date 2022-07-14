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
    const mensagemErro   = document.querySelector(".modal__content");
    const btnRemoverErro = document.querySelector(".content__delete-button");
    btnRemoverErro.addEventListener("click", () => {
      mensagemErro.style.display = "none";
    });
  }

  static modal(e) {
    e.preventDefault();
    const value       = e.target.value;
    const modalScreen = document.querySelector(".modal-screen");
    modalScreen.classList.toggle("modal-open");
    
    if (value === "close") {
      const form      = document.querySelector(".modal");
      Modals.bodyDocument.removeChild(form) 
    } else {
      
      const title     = document.querySelector(".modal-header__title");
      title.innerText = value;
      
      const form      = Modals.creatStructure(value);
      Modals.bodyDocument.append(form);
    }

    // Inicio Evento do CLick para receber os dados dos inputs Criar Habitos, salvar na variavel dadosColetados e retornar a requisição.
    const buttonInserirHabito = document.getElementById("buttonIdTeste");
    buttonInserirHabito.addEventListener("click", (event) =>{
      event.preventDefault();
      const getTitleValue   = document.querySelector("#title");
      const getSelectValue    = document.querySelector("select");
      const getDescriptionValue = document.querySelector("#description");
      const selectedValue = getSelectValue.options[getSelectValue.selectedIndex].value;
  
      // retornar um Objeto com os valores coletados dos inputs
      const dadosColetadosCriarHabitos = {
        "habit_title"      : getTitleValue.value,
        "habit_description": getDescriptionValue.value,
        "habit_category"   : selectedValue
      }
      console.log(dadosColetadosCriarHabitos)
      return Request.createHabit(dadosColetadosCriarHabitos);
    })

    // Final Evento do CLick para receber os dados dos inputs, salvar na variavel dadosColetados e retornar a requisição.


    // Inicio Evento do Click para receber dados dos inputs Editar Perfil e salvar na variavel Dados
    
    // const editProfile = document.querySelector("#editProfile");
    // editProfile.addEventListener("click", (event) => {
    //   event.preventDefault();
    //   const btnSave = document.getElementById("btnSave");
    //   console.log(btnSave)
    // });

    
  }

  static logOutProfile(){
    window.location.replace('../../index.html')
    window.localStorage.clear()
  }

}
