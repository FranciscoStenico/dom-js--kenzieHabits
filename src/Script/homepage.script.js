import Request from "../Controllers/requisicao.controllers.js";
import Render from "../Models/render.models.js";
import Event from "../Controllers/event.controllers.js"

setTimeout(() => {
  Render.headerData();
  Request.listHabits();
}, 100);

// Render.menuDropDown();

const dropDown = document.querySelector(".dropdownMenu__container");
dropDown.addEventListener("click", Event.dropDown);

const editProfile = document.querySelector("#editProfile");
editProfile.addEventListener("click", Event.modal);

const logOutBtn = document.querySelector("#logOutBtn");
logOutBtn.addEventListener("click", Event.logOutProfile);

const create = document.querySelector("#buttonCriarHabito");
create.addEventListener("click", Event.modal);

const all = document.querySelector("#opAll");
all.addEventListener("click", Event.filterAll);

const complete = document.querySelector("#opComplete");
complete.addEventListener("click", Event.filterComplete);

const modalClose = document.querySelector(".modal-header__exit-button");
modalClose.addEventListener("click", Event.modal);

const reloadButton = document.querySelector("#btnCarregarMais");
reloadButton.addEventListener("click", Event.reload)