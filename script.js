const allButtonsElm = document.querySelectorAll(".btn");
let strDisplay = "";
const displayElm = document.querySelector(".display");

const operators = ["*", "+", "-", "/", "%"];
let lastOperator = "";
const audio = new Audio("./assets/pranked.mp3");

const buttonAction = (value) => {
  displayElm.classList.remove("prank");
  if (value === "AC") {
    strDisplay = "";
    return display(strDisplay);
  }

  if (value === "=" || value === "Enter") {
    //get the last character of the string
    lastOperator = "";
    const lastchar = strDisplay[strDisplay.length - 1];
    //check if it is one of tjhe operators
    if (operators.includes(lastchar)) {
      strDisplay = strDisplay.slice(0, -1);
    }

    return displayTotal();
  }

  if (value === "C") {
    strDisplay = strDisplay.slice(0, -1);
    return display(strDisplay);
  }

  if (operators.includes(value)) {
    lastOperator = value;
    const lastchar = strDisplay[strDisplay.length - 1];
    if (operators.includes(lastchar)) {
      strDisplay = strDisplay.slice(0, -1);
    }
  }

  if (value === ".") {
    const lastIndexOperator = strDisplay.lastIndexOf(lastOperator);
    const numberSet = strDisplay.slice(lastIndexOperator);
    if (numberSet.includes(".")) {
      return;
    }

    if (!lastOperator && strDisplay.includes(".")) {
      return;
    }
  }

  strDisplay += value;

  display(strDisplay);
};

allButtonsElm.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.scale = ".9";
  });

  btn.addEventListener("click", () => {
    btn.style.scale = "1";
    const value = btn.innerText;
    buttonAction(value);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.0";
};
// calculate total
const displayTotal = () => {
  const extraValue = randValue();
  if (extraValue) {
    displayElm.classList.add("prank");
    audio.play();
  }

  const total = eval(strDisplay) + extraValue;
  strDisplay = total.toString();
  display(strDisplay);
};

const randValue = () => {
  const num = Math.round(Math.random() * 10);
  return num < 3 ? num : 0;
};

// Binding keyword

document.addEventListener("keypress", (e) => {
  const value = e.key;
  if (e.code.includes("Key")) {
    return;
  }
  buttonAction(value);
});
