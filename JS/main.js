"use script";

// Get the container element
var myContainer = document.getElementById("navigation");

// Get all buttons with class="btn" inside the container
var tags = myContainer.getElementsByClassName("tag");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//otp
// const handleInput = (inputNumber) => {
//   const currentInput = document.querySelector(
//     `.inputContainer input:nth-child(${inputNumber})`
//   );
//   const nextInput = document.querySelector(
//     `.inputContainer input:nth-child(${inputNumber + 1})`
//   );

//   if ((currentInput.value.length === 1) & !nextInput) {
//     nextInput.disabled = false;
//     nextInput.focus();
//   }

//   const allInputFilled = Array.from(
//     document.querySelectorAll(".inputContainer input")
//   ).every((input) => input.value.length === 1);
//   const verifyBtn = document.querySelector(".verifyBtn");
//   verifyBtn.disabled = !allInputFilled;
// };

// const handleBackspace = (inputNumber, event) => {
//   if (event.key === "Backspace") {
//     const currentInput = document.querySelector(
//       `.inputContainer input:nth-child(${inputNumber})`
//     );
//     const prevInput = document.querySelector(
//       `.inputContainer input:nth-child(${inputNumber - 1})`
//     );

//     if (currentInput.value.length === 0 && prevInput) {
//       currentInput.disabled = true;
//       currentInput.value = "";
//       prevInput.focus();
//     }

//     const allInputFilled = Array.from(
//       document.querySelectorAll(`.inputContainer input`)
//     ).every((input) => input.value.lenght === 1);

//     const verifyBtn = document.querySelector(".verifyBtn");
//     verifyBtn.disabled = !allInputFilled;
//   }
// };
// input field validation*/
const myName = document.getElementById("name");
const password = document.getElementById("password");
form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (myName.value === "" || myName.value == null) {
    messages.push("Name /email is required");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(",");
  }
});
