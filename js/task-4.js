const registerForm = document.querySelector(".login-form");


const senduserform = (event) => {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    alert ('All form fields must be filled in');
    return;
  }
const userform ={};
userform[form.elements.email.name] = login.trim();
userform[form.elements.password.name] = password.trim();

console.log(userform);

registerForm.reset();
  
}

registerForm.addEventListener('submit', senduserform);