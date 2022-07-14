import Render from "../Models/render.models.js";
import Event from "../Controllers/event.controllers.js";

export default class Request {
  static baseUrl    = "https://habits-kenzie.herokuapp.com/api";
  static token      = localStorage.getItem("@kenzie-habits: token");
  static userAvatar = localStorage.getItem("@kenzie-habits: FotoDeUsuario");
  static userName   = localStorage.getItem("@kenzie-habits: NomeDeUsuario");
  static userEmail  = localStorage.getItem("@kenzie-habits: EmailDeUsuario")

  static async login(dados) {
    return await fetch(`${this.baseUrl}/userLogin`, {
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("@kenzie-habits: NomeDeUsuario", res.response.usr_name);
        localStorage.setItem("@kenzie-habits: EmailDeUsuario", res.response.usr_email);
        localStorage.setItem("@kenzie-habits: FotoDeUsuario", res.response.usr_image);
        localStorage.setItem("@kenzie-habits: token", res.token);
        window.location.href = "./src/Pages/homepage.html";
      })
      .catch((err) => { 
        const mensagemErro = document.querySelector(".modal__content")
        mensagemErro.style.display = "flex"
        setTimeout(() => {
          mensagemErro.style.display = "none"
        }, 3000);
    })
  }

  static async editProfile(body) {
    const options = {
      method : "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(body),
    };

    fetch(`${this.baseUrl}/user/profile`, options)
      .then((response) => response.json())
      // .then(response => /* desenvolva aqui seu código de resposta */)
      .catch((err) => console.error(err));
  }

  static async createHabit(body) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(body),
    };

    fetch("https://habits-kenzie.herokuapp.com/api/habits", options)
      .then((response) => response.json())
      .then(response => console.log(response))
      .catch((err) => console.error(err));
  }

  static async listHabits(num) {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    fetch(`${this.baseUrl}/habits`, options)
      .then((response) => response.json())
      .then((response) => {
        Render.habitList(num, response)
        const btnFiltrarTodos = document.querySelector("#opAll")
        const btnFiltrarFeitos = document.querySelector("#opComplete")

        btnFiltrarTodos.addEventListener("click", ()=>{
          
        })
      })
      .catch((err) => console.error(err));
  }

  static async listByCategory(category) {
    const options = {
      method : "GET",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    fetch(`${this.baseUrl}/habits/category/${category}`, options)
      .then((response) => response.json())
      // .then(response => /* desenvolva aqui seu código de resposta */)
      .catch((err) => console.error(err));
  }

  static async updateHabit(body, id) {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(body),
    };

    fetch(`${this.baseUrl}/habits/${id}`, options)
      .then((response) => response.json())
      // .then(response => /* desenvolva aqui seu código de resposta */)
      .catch((err) => console.error(err));
  }

  static async completeHabit(id) {
    const options = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    fetch(`${this.baseUrl}/habits/complete/${id}`, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async deleteHabit(id) {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    fetch(`${this.baseUrl}/api/habits/${id}`, options)
      .then((response) => response.json())
      .then(response => console.log(response))
      .catch((err) => console.error(err));
  }
}
