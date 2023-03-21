//recuperation des elements

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

//evenements
form.addEventListener("submit", (e) => {
  e.preventDefault();

  form_verify();
});

//fonctions
function form_verify() {
  // Obtenir toutes les valeurs des inputs
  const userValue = username.value.trim();
  const emailValue = email.value.trim();
  const pwdValue = password.value.trim();
  const pwd2Value = password2.value.trim();

  // Username verify
  if (userValue === "") {
    let message = "Username ne peut pas être vide";
    setError(username, message);
  }
}

function setError(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");
  //ajout du message d'erreur
  small.innerText = message;

  //ajout de la classe error
  formControl.className = "form-control error";
}
