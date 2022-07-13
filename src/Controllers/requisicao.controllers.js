import Render from "../Models/render.models.js";

export default class Request {
  static baseUrl = "https://habits-kenzie.herokuapp.com/api";
  static token = localStorage.getItem("@kenzie-habits (token)");

  static async login(dados) {
    return await fetch(this.base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res.response);
        localStorage.setItem("@blog:NomeDeUsuario", res.response.usr_name);
        localStorage.setItem("@blog:EmailDeUsuario", res.response.usr_email);
        localStorage.setItem("@blog:FotoDeUsuario", res.response.usr_image);
        localStorage.setItem("@blog:token", res.token);
        window.location.href = "./src/Pages/homepage.html";
      })
      .catch((err) => console.log(err));
  }

  static async editProfile(body) {
    const options = {
      method: "PATCH",
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
      // .then(response => /* desenvolva aqui seu código de resposta */)
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
      .then((response) => Render.habitList(num, response))
      .catch((err) => console.error(err));
  }

  static async listByCategory(category) {
    const options = {
      method: "GET",
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
      // .then(response => /* desenvolva aqui seu código de resposta */)
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
      // .then(response => /* desenvolva aqui seu código de resposta */)
      .catch((err) => console.error(err));
  }
}
