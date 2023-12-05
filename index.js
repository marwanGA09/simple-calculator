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
