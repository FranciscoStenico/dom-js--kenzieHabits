import Event from "../Controllers/event.controllers.js";

const loginButton = document.querySelector(".content__sendData");
loginButton.addEventListener("click", Event.submitLogin);
