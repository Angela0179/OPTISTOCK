"use script";
// document.querySelector(".menu-icon").addEventListener("click", function () {
//   const menuLinks = document.querySelector(".sidebar");
//   menuLinks.classList.toggle("show");
//   const icon = document.querySelector("#barz");
// });
// const mySidebar = getElementById("mysidebar");
// function togglemySidebar() {
//   mySidebar.classlist.toogle("show");
// }

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
const handleInput = (inputNumber) => {
  const currentInput = document.querySelector(
    `.inputContainer input:nth-child(${inputNumber})`
  );
  const nextInput = document.querySelector(
    `.inputContainer input:nth-child(${inputNumber + 1})`
  );

  if ((currentInput.value.length === 1) & !nextInput) {
    nextInput.disabled = false;
    nextInput.focus();
  }

  const allInputFilled = Array.from(
    document.querySelectorAll(".inputContainer input")
  ).every((input) => input.value.length === 1);
  const verifyBtn = document.querySelector(".verifyBtn");
  verifyBtn.disabled = !allInputFilled;
};

const handleBackspace = (inputNumber, event) => {
  if (event.key === "Backspace") {
    const currentInput = document.querySelector(
      `.inputContainer input:nth-child(${inputNumber})`
    );
    const prevInput = document.querySelector(
      `.inputContainer input:nth-child(${inputNumber - 1})`
    );

    if (currentInput.value.length === 0 && prevInput) {
      currentInput.disabled = true;
      currentInput.value = "";
      prevInput.focus();
    }

    const allInputFilled = Array.from(
      document.querySelectorAll(`.inputContainer input`)
    ).every((input) => input.value.lenght === 1);

    const verifyBtn = document.querySelector(".verifyBtn");
    verifyBtn.disabled = !allInputFilled;
  }
};
