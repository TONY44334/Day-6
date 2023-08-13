const Form = document.querySelector("form");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
const Error = document.querySelector(".error");

Form.addEventListener("submit", (e) => {

  e.preventDefault();
     vaidateInputs();
});
let success = false;

const setError = (element, message) => {
  const Error = document.querySelector(".error");

  Error.innerText = message;
};
const setError_P = (element, message) => {
  const inputControl = element.parentElement;
  const Error = document.querySelector(".error_p");

  Error.innerHTML = message;
};

const isValidEmail = (email) => {
  regx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regx.test(String(email).toLowerCase());
};

const setSuccess = (element) => {
  const Error = document.querySelector(".error");
  success = true;
  Error.innerText = "";
};
const setSuccess_P = (element) => {
  const Error = document.querySelector(".error_p");
  success = true;
  Error.innerText = "";
};

  vaidateInputs = () => {
  const Emailvalue = Email.value.trim();
  const Passwordvalue = Password.value.trim();

  if ((Emailvalue === '') | (Emailvalue == null)) {
    setError(Email, "Email cant be empty.");
  } else if (!isValidEmail(Emailvalue)) {
    setError(Email, "Enter a valid email.");
  } else {
    setSuccess();
  }

  if ((Passwordvalue === "") | (Passwordvalue == null)) {
    setError_P(Password, "Password is required.");
  } else if (Passwordvalue.length < 6) {
    setError_P(Password, "Password can't be<br>less than 6 characters.");
  }else if(success == true){
    window.location.assign("assests/rickroll.html")
  } 
  else {
    setSuccess_P();
    
  }
}




