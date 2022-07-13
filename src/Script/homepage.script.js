import Request from "../Controllers/requisicao.controllers.js";
import Render from "../Models/render.models.js";

setTimeout(() => {
    Render.headerData()
	Request.listHabits(10);
}, 100);

Render.menuDropDown()