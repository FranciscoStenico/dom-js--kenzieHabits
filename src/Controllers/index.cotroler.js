export default class LoginRequest{
    static base_url = "https://habits-kenzie.herokuapp.com/api/userLogin"

    static async login(dados){
        return await fetch(this.base_url, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(dados),
        })
        .then((res) => {
            console.log(res)
           return res.json()
        })
        .then((res) => {
            console.log(res.response)
            localStorage.setItem("@blog:NomeDeUsuario", res.response.usr_name);
            localStorage.setItem("@blog:EmailDeUsuario", res.response.usr_email);
            localStorage.setItem("@blog:FotoDeUsuario", res.response.usr_image);
            localStorage.setItem("@blog:token", res.token);
            window.location.href="./src/Pages/homepage.html"
        })
        .catch((err) => console.log(err))
    }
}

