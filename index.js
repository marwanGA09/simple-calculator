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
      break;
  }
  if (result !== "") return Math.round(result * 10 ** length) / 10 ** length;
  else return "Error";
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

const equationDisplay = document.querySelector(".equation");
const resultDisplay = document.querySelector(".result");
equationDisplay.textContent = "0";
resultDisplay.textContent = "0";
const allBtn = document.querySelector(".buttons");

let var1 = "",
  var2 = "",
  operator1 = "",
  operator2,
  result = "";
allBtn.addEventListener("click", (event) => {
  const currentEvent = event.target.textContent;

  if (currentEvent == "Clear") {
    document.location.reload();
  } else {
    if (Number.isInteger(+currentEvent) && !operator1) {
      var1 += currentEvent;
      console.log("11111");
    } else if (Number.isNaN(+currentEvent) && !operator1) {
      operator1 = currentEvent;
      console.log("22222");
    } else if (Number.isInteger(+currentEvent) && operator1) {
      var2 += currentEvent;
      console.log("333333");
    } else if (Number.isNaN(+currentEvent) && operator1) {
      result = operation(operator1, var1, var2);
      var1 = result;
      var2 = "";
      if (currentEvent == "=") {
        operator1 = "";
        console.log("44444");
      } else {
        operator1 = currentEvent;
        console.log("55555");
      }
    }
    equationDisplay.textContent = ` ${var1} ${operator1} ${var2}`;
    resultDisplay.textContent = result;
  }

  console.log("var1 ", var1);
  console.log("oper1 ", operator1);
  console.log("var2 ", var2);
  console.log("result  ", result);
});
