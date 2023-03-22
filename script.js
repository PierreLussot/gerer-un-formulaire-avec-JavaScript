//recuperation des elements

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
console.log(password);
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
    let message = "Nom d'utilisateur ne peut pas être vide";
    setError(username, message);
  } else if (!userValue.match(/^[a-zA-Z]/)) {
    let message = "Nom d'utilisateur doit commencer par une lettre";
    setError(username, message);
  } else if (userValue.length < 3) {
    console.log(userValue.length);
    let message = "Nom d'utilisateur doit contenir plus de 3 caractère";
    setError(username, message);
  } else {
    setSuccess(username);
  }

  // Email verify

  if (emailValue === "") {
    let message = "Email ne peut pas être vide";
    setError(email, message);
  } else if (!emailVerify(emailValue)) {
    let message = "email invalide";
    setError(email, message);
  } else {
    setSuccess(email);
  }

  // Password verify
  if (pwdValue === "") {
    let message = "Password ne peut pas être vide";
    setError(password, message);
  } else if (!passwordVerify(pwdValue)) {
    let message = "Le mot de passe est trop faible (8 à 12 caractères)";
    setError(password, message);
  } else {
    setSuccess(password);
  }

  // Password confirm verify

  if (pwd2Value === "") {
    let message = "Confirmation du mot de passe ne peut pas être vide";
    setError(password2, message);
  } else if (pwdValue !== pwd2Value) {
    let message = "Les mot de passes ne correspondent pas";
    setError(password2, message);
  } else {
    setSuccess(password2);
  }
}

// Fonctions
function setError(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");
  //ajout du message d'erreur
  small.innerText = message;
  //ajout de la classe error
  formControl.className = "form-control error";
}

function setSuccess(elem) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");
  //ajout de la classe error
  formControl.className = "form-control success";
}

function emailVerify(email) {
  return /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/.test(email);
}

function passwordVerify(password) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(
    password
  );
}
