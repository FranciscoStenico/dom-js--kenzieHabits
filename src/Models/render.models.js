import Request from "../Controllers/requisicao.controllers.js";
export default class Render{

    static headerData(){
        const containerMenu = document.querySelector(".menu__container__foto");
        const containerPerfil = document.querySelector(".perfil__container__foto");
        const userName = document.querySelector(".perfil__titulo");
        
        const fotoMenu = document.createElement("img");
        const fotoPerfil = document.createElement("img");

        fotoMenu.classList.add("menu__foto");
        fotoPerfil.classList.add("perfil__foto");

        fotoMenu.src = Request.userAvatar;
        fotoPerfil.src = Request.userAvatar;
        userName.innerText = Request.userName;

        containerMenu.appendChild(fotoMenu);
        containerPerfil.appendChild(fotoPerfil);
    };
    
}