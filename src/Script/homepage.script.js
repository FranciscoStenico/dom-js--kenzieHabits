import Request from "../Controllers/requisicao.controllers.js";
import Render from "../Models/render.models.js";

setTimeout(() => {
    Render.headerData()
	Request.listHabits(10);
}, 100);


function menuDropDownDOM() {
	const getMenuContainer = document.querySelector(".dropdownMenu__container");
	const createDivContainer = document.createElement("div");
	createDivContainer.classList = "dropdown";
	const figureDropDown = document.createElement("figure");
	figureDropDown.classList = "figureDropDown menu__container__foto";
	const createUlList = document.createElement("ul");
	createUlList.classList = "dropdown-content";
	const createLiEditarPerfil = document.createElement("li");
	createLiEditarPerfil.innerText = "Editar Perfil";
	const createLiLogout = document.createElement("li");
	createLiLogout.innerText = "Sair"

	createUlList.append(createLiEditarPerfil, createLiLogout)
	createDivContainer.append(figureDropDown, createUlList)
	getMenuContainer.append(createDivContainer)

}menuDropDownDOM()
