const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Stopping the page from reloading when the form is submitted

  const emailValue = this.elements.email.value.trim(); // Getting the email value and clean its from spaces
  const passwordValue = this.elements.password.value.trim(); // Getting the password value and clean its from spaces

  // Checking for empty field values
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData); // Outputting the object with the input data to the console

    this.reset(); // Clearing form field values
  }
});
