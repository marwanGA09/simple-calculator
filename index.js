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

const equation = document.querySelector(".equation");
const result = document.querySelector(".result");
equation.textContent = "";
result.textContent = "";
const allBtn = document.querySelector(".buttons");

let inputEquation = "";

const operatorArray = ["+", "-", "*", "/"];
// let count = 0;
let middleOperator = [];
allBtn.addEventListener("click", (event) => {
  equation.textContent = event.target.textContent;
  console.log("equation.textContent", equation.textContent);
  if (operatorArray.includes(event.target.textContent)) {
    // count++;
    middleOperator.push(event.target.textContent);
    console.log("middleOperator", middleOperator);
    if (middleOperator.length == 2) {
      [var1, var2] = [...inputEquation.split(",")];
      console.log("var1 and var2", var1, var2);
      const currentResult = operation(middleOperator.shift(), var1, var2);
      console.log("current result ", currentResult);
      result.textContent = currentResult;
      inputEquation = currentResult;
      console.log("inputEquation", inputEquation);
    }
    inputEquation += ",";
    console.log("inputEquation", inputEquation);
  } else {
    inputEquation += event.target.textContent;
    console.log("inputEquation", inputEquation);
  }
});

// console.log(event.target.textContent);
// if (operatorArray.includes(event.target.textContent)) {
//   count++
//   if (count == 2) {
//     [var1, ope1, var2, ope2] = [...inputEquation.split()];
//   }
// } else console.log("not constain");
// equation.textContent = inputEquation.join("");
// if(in)
//   result.textContent = ;
