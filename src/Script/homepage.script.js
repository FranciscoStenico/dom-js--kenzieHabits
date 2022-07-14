import Request from "../Controllers/requisicao.controllers.js";
import Render from "../Models/render.models.js";
import Event from "../Controllers/event.controllers.js"

setTimeout(() => {
  Render.headerData();
  Request.listHabits();
}, 100);

// Render.menuDropDown();

const editProfile = document.querySelector("#editProfile");
editProfile.addEventListener("click", Event.modal);

const create = document.querySelector("#buttonCriarHabito");
create.addEventListener("click", Event.modal);

const modalClose = document.querySelector(".modal-header__exit-button");
modalClose.addEventListener("click", Event.modal);

const expand = document.querySelector(".content__expand");
expand.addEventListener("click", Event.expandContent);

const logOutBtn = document.querySelector("#logOutBtn");
logOutBtn.addEventListener("click", Event.logOutProfile);

const btnCarregarMais = document.getElementById("btnCarregarMais");
btnCarregarMais.addEventListener("click", Event.carregarMais);


