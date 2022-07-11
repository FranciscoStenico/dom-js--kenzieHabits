export default class Request {
  static baseUrl = "https://habits-kenzie.herokuapp.com/api";
  static token = localStorage.getItem("@kenzie-habits (token)");

  static async userLogin(body) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch(`${this.baseUrl}/userLogin`, options)
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("@kenzie-habits (token)", response.token);
        localStorage.setItem("@kenzie-habits (response)", response.response);

        /* desenvolva aqui seu código de resposta */
      })
      .catch((err) => console.error(err));
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

  static async readAll() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    fetch(`${this.baseUrl}/habits`, options)
      .then((response) => response.json())
      // .then(response => /* desenvolva aqui seu código de resposta */)
      .catch((err) => console.error(err));
  }

  static async readByCategory(category) {
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
