const inputs = document.querySelectorAll(".form-container form input")

document.getElementById("registration-form")
  .addEventListener("submit", e => {
    e.preventDefault()
    inputs.forEach(input => input.type != "submit" ? input.value = "" : null)
  });