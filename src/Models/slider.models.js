export default class Slider {
  static unsuccess(message) {
    const error = document.querySelector(".alert--error");
    error.innerText = message;
    error.classList.add("thrower");

    setTimeout(() => {
      error.classList.remove("thrower");
    }, 5000);
  }
  
  static success(message) {
    const success = document.querySelector(".alert--success");
    success.innerText = message;
    success.classList.add("thrower");

    setTimeout(() => {
      success.classList.remove("thrower");
    }, 5000);
  }
}
