import Request from "../Controllers/requisicao.controllers.js";

export default class Render {
  static headerData() {
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
  }

  static habitList(index, response) {
    index <= response.length
      ? response.forEach((habit, i) =>
          i < index ? this.habit(habit, response) : null
        )
      : this.habitList(response.length, response);
  }

  static habit(habit, response) {
    const list = document.querySelector("#habitsList");

    const item = document.createElement("li");
    const checkbox = document.createElement("div");
    const title = document.createElement("h6");
    const description = document.createElement("p");
    const category = document.createElement("div");
    const tag = document.createElement("span");
    const editor = document.createElement("div");

    item.classList.add("list__habit");
    checkbox.classList.add("habit__checkbox");
    title.classList.add("habit__title");
    description.classList.add("habit__description", "table__description");
    category.classList.add("habit__category", "table__category");
    tag.classList.add("category__tag");
    editor.classList.add("habit__editor");

    title.innerText = habit.habit_title;
    description.innerText = habit.habit_description;
    tag.innerText = habit.habit_category;

    if (habit.habit_status) {
      const empty = document.querySelector(".table__empty");
      empty.classList.add("hide");

      item.classList.add("complete");
      checkbox.classList.add("habit__checkbox--mark");
      title.classList.add("scratch");
    }

    if (response.length > 0) {
      category.append(tag);
      item.append(checkbox, title, description, category, editor);
      list.append(item);
    }
  }

  static menuDropDown() {
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
  }
}
