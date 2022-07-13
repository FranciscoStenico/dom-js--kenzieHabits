import Event from "../Controllers/event.controllers.js";

const loginButton = document.querySelector("#btnLogin");
loginButton.addEventListener("click", Event.submitLogin);