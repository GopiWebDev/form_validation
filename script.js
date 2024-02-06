const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const button = document.querySelector("button");

const passCheck = () => {
  if (passwordInput.value !== confirmPassword.value) {
    alert("Passwords Does not match");
    passwordInput.value = "";
    confirmPassword.value = "";
  }
};

button.addEventListener("click", passCheck);
