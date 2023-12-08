function add(a, b) {
  return +a + +b;
}

function subtraction(a, b) {
  return +a - +b;
}

function multiplication(a, b) {
  return +a * +b;
}

function division(a, b) {
  return b != 0 ? +a / +b : "";
}

function power(a, b) {
  return (+a) ** +b;
}

function factorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  } else return number * factorial(number - 1);
}

function operation(operator, a, b) {
  let result = 0;
  // To round number to nearest integer number.
  const length = a.length > b.length ? a.length : b.length;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtraction(a, b);
      break;
    case "*":
      result = multiplication(a, b);
      break;
    case "/":
      result = division(a, b);
      break;
    case "^":
      result = power(a, b);
      break;
  }

  if (!Number.isNaN(result) && result != "") {
    return Math.round(result * 10 ** length) / 10 ** length;
  } else {
    return "Error";
  }
}

// SUDO CODE FOR ADD EVENT LISTENER FUNCTION

// if number and opertor = 0, add to var1,
// if NaN and operator =0,add to operator
// if number and  and operator ~=0, add to var2
// if Nan and operator != 0, add to second operator
// {
// result = pperator (var1,var2,operator1)
// var1 = result, var2 = "",oerator1 = operator2(if second operator not =)
// if operatrr2 == "="{
// result = operation(var1,var2,operation1)
// var1,vae2,operation1,operation2 ==""
// }
// , opeator2 = ""
// }

const body = document.querySelector("body");
const equationDisplay = document.querySelector(".equation");
const resultDisplay = document.querySelector(".result");
equationDisplay.textContent = "0";
resultDisplay.textContent = "";
const allBtn = document.querySelector(".buttons");

function displayResult(var1, var2, operator1) {
  if (var1 && var2 && operator1) {
    result = operation(operator1, var1, var2);
    resultDisplay.textContent = result;
  } else {
    resultDisplay.textContent = var1;
  }
}

// interact user input with programs main goal
function mainFunction(currentEvent) {
  if (currentEvent == "Clear") {
    document.location.reload();
  } else if (currentEvent == "Del") {
    // remove one element from the last.
    if (var2 != "") {
      var2 = var2.slice(0, -1);
    } else if (operator1 != "") {
      operator1 = "";
    } else if (var1 != "") {
      var1 = var1.toString().slice(0, -1);
    }

    equationDisplay.textContent = ` ${var1} ${operator1} ${var2}`;
    displayResult(var1, var2, operator1);
  } else {
    if (
      (Number.isInteger(+currentEvent) || currentEvent == ".") &&
      !operator1 &&
      currentEvent != "="
    ) {
      if (signs.includes(currentEvent)) {
        // Not to include double . in single number.
        if (!(var1.includes(".") && currentEvent == ".")) {
          var1 += currentEvent;
        }
      }
    } else if (
      Number.isNaN(+currentEvent) &&
      currentEvent != "." &&
      currentEvent != "=" &&
      !operator1
    ) {
      if (signs.includes(currentEvent)) {
        operator1 = currentEvent;
      }
    } else if (
      (Number.isInteger(+currentEvent) || currentEvent == ".") &&
      operator1
    ) {
      if (signs.includes(currentEvent)) {
        if (!(var2.includes(".") && currentEvent == ".")) {
          var2 += currentEvent;
        }
      }
    } else if (
      Number.isNaN(+currentEvent) &&
      currentEvent != "." &&
      operator1 &&
      var2 == "" &&
      currentEvent != "="
    ) {
      // change sign of operator two different type of operator enter simultaneously
      if (signs.includes(currentEvent)) {
        operator1 = currentEvent;
      }
    } else if (
      Number.isNaN(+currentEvent) &&
      currentEvent != "." &&
      operator1 &&
      var2 != ""
    ) {
      if (signs.includes(currentEvent)) {
        result = operation(operator1, var1, var2);
        var1 = result;
        var2 = "";

        if (currentEvent == "=") {
          operator1 = "";
        } else {
          operator1 = currentEvent;
        }
      }
    }
    if (currentEvent == "negative") {
      if (operator1 != "") {
        if (var2 == "") {
          var2 = "-";
        } else {
          var2 = (+var2 * -1).toString();
        }
      } else {
        var1 = (+var1 * -1).toString();
      }
    }

    if (currentEvent == "sqrt") {
      if (var2 != "") {
        var2 = Math.sqrt(+var2).toFixed(4).toString();
      } else if (var1 != "") {
        var1 = Math.sqrt(var1).toFixed(4).toString();
      }
    }

    if (currentEvent == "log10") {
      if (var2 != "") {
        var2 = Math.log10(+var2).toFixed(4).toString();
      } else if (var1 != "") {
        var1 = Math.log10(+var1).toFixed(4).toString();
      }
    }

    if (currentEvent == "ln") {
      if (var2 != "") {
        var2 = Math.log(+var2).toFixed(4).toString();
      } else if (var1 != "") {
        var1 = Math.log(+var1).toFixed(4).toString();
      }
    }

    if (currentEvent == "!") {
      if (var2 != "") {
        if (var2 > 0) var2 = factorial(+var2).toString();
      } else if (var1 != "") {
        if (var1 > 0) var1 = factorial(+var1).toString();
      }
    }

    if (
      currentEvent.slice(0, 3) == "sin" ||
      currentEvent.slice(0, 3) == "cos" ||
      currentEvent.slice(0, 3) == "tan"
    ) {
      trig = currentEvent.slice(0, 3);
      if (var2 != "") {
        if (trig == "sin") {
          var2 = Math.sin((+var2 * Math.PI) / 180)
            .toFixed(3)
            .toString();
        } else if (trig == "cos") {
          var2 = Math.cos((+var2 * Math.PI) / 180)
            .toFixed(3)
            .toString();
        } else if (trig == "tan") {
          var2 = Math.tan((+var2 * Math.PI) / 180)
            .toFixed(3)
            .toString();
        }
      } else if (var1 != "") {
        if (var1 != "") {
          if (trig == "sin") {
            var1 = Math.sin((+var1 * Math.PI) / 180)
              .toFixed(3)
              .toString();
          } else if (trig == "cos") {
            var1 = Math.cos((+var1 * Math.PI) / 180)
              .toFixed(3)
              .toString();
          } else if (trig == "tan") {
            var1 = Math.tan((+var1 * Math.PI) / 180)
              .toFixed(3)
              .toString();
          }
        }
      }
    }

    equationDisplay.textContent = ` ${var1} ${operator1} ${var2}`;
    console.log(var1, var2, operator1);
    displayResult(var1, var2, operator1);
  }
}

let var1 = "",
  var2 = "",
  operator1 = "",
  result = "",
  // signs array used to filter un useful keyboard code value like event
  signs = [
    "-",
    "=",
    "+",
    "*",
    "/",
    ".",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "^",
  ];

// Listening for click event
allBtn.addEventListener("click", (event) => {
  let currentEvent = event.target.textContent;
  if (currentEvent == "+/-") {
    currentEvent = "negative";
    console.log(currentEvent);
  }
  mainFunction(currentEvent);
  event.stopPropagation();
});

// Listening for keyboard press
body.addEventListener("keydown", (event) => {
  let currentEvent;
  if (event.key == "Backspace") {
    currentEvent = "Del";
  } else if (event.key == "Delete") {
    currentEvent = "Clear";
  } else {
    currentEvent = event.key;
  }

  mainFunction(currentEvent);
});
