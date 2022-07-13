import Request from "../Controllers/requisicao.controllers.js";
import Abacaxi from "../Models/render.models.js";

Request.userLogin({
	email: "grupo2Nicole@mail.com",
	password: "567c33b430064c4f43b3db2ccd7a074f"
})

setTimeout(() => {
    Abacaxi.headerData()
}, 100);