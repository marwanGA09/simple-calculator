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

function operation(operator, a, b) {
  let result = 0;
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
      console.log(result);
      break;
  }

  if (!Number.isNaN(result) && result != "") {
    return Math.round(result * 10 ** length) / 10 ** length;
  } else {
    return "Error";
  }
}

// console.log("*********************");
// console.log(operation("=", "3", "3"));
// console.log(operation("=", "3", "8"));
// console.log(operation("=", "3", ""));
// console.log(Boolean(operation("=", "", "")));
// console.log(operation("=", "3.7", "3.7"));
// console.log(operation("=", "3.70", "3.7"));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean("1"));
// console.log(Boolean("0"));
// console.log("*********************");
// console.log(Number.isInteger(3.9));

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
resultDisplay.textContent = "0";
const allBtn = document.querySelector(".buttons");

function displayResult(var1, var2, operator1) {
  if (var1 && var2 && operator1) {
    result = operation(operator1, var1, var2);
    resultDisplay.textContent = result;
  }
}

function mainFunction(currentEvent) {
  if (currentEvent == "Clear") {
    document.location.reload();
  } else if (currentEvent == "Del") {
    if (var2 != "") {
      var2 = var2.slice(0, -1);
      // console.log("*****", var2);
    } else if (var1 != "") {
      console.log("var!", var1);
      var1 = var1.slice(0, -1);
    }
    // console.log("*****", var1);

    equationDisplay.textContent = ` ${var1} ${operator1} ${var2}`;
    displayResult(var1, var2, operator1);
  } else {
    if (
      (Number.isInteger(+currentEvent) || currentEvent == ".") &&
      !operator1 &&
      currentEvent != "="
    ) {
      if (signs.includes(currentEvent)) {
        if (!(var1.includes(".") && currentEvent == ".")) {
          var1 += currentEvent;
          resultDisplay.textContent = var1;
        }
      }
      // console.log("11111");
    } else if (
      (Number.isNaN(+currentEvent) || currentEvent != ".") &&
      !operator1 &&
      currentEvent != "="
    ) {
      if (signs.includes(currentEvent)) {
        operator1 = currentEvent;
      }
      // console.log("22222");
    } else if (
      (Number.isInteger(+currentEvent) || currentEvent == ".") &&
      operator1
    ) {
      if (signs.includes(currentEvent)) {
        if (!(var2.includes(".") && currentEvent == ".")) {
          var2 += currentEvent;
          displayResult(var1, var2, operator1);
        }
      }
      // console.log("333333");
    } else if (
      (Number.isNaN(+currentEvent) || currentEvent != ".") &&
      operator1 &&
      var2 == "" &&
      currentEvent != "="
    ) {
      if (signs.includes(currentEvent)) {
        operator1 = currentEvent;
      }
    } else if (
      (Number.isNaN(+currentEvent) || currentEvent != ".") &&
      operator1 &&
      var2 != ""
    ) {
      if (signs.includes(currentEvent)) {
        var1 = result;
        var2 = "";

        if (currentEvent == "=") {
          operator1 = "";
          // console.log("44444");
        } else {
          operator1 = currentEvent;
          // console.log("55555");
        }
      }

      displayResult(var1, var2, operator1);
    }
    equationDisplay.textContent = ` ${var1} ${operator1} ${var2}`;
  }
}

let var1 = "",
  var2 = "",
  operator1 = "",
  result = "",
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
  ];

console.log(signs.length);
// signs array used to filter un useful keyboard code value like event
allBtn.addEventListener("click", (event) => {
  const currentEvent = event.target.textContent;
  console.log(currentEvent);
  mainFunction(currentEvent);
  // console.log("var1 ", var1);
  // console.log("oper1 ", operator1);
  // console.log("var2 ", var2);
  // console.log("result  ", result);
  event.stopPropagation();
});

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
