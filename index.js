let accumulator = "";
let total = 0;

const updateAccumulator = newVal => {
  accumulator = newVal;
  const val = document.querySelector(".calculator__output__accumulator");
  val.innerHTML = accumulator;
};

const updateTotal = newVal => {
  total = newVal;
  const val = document.querySelector(".calculator__output__total");
  const isFloating = total % 1 !== 0;
  val.innerHTML = isFloating ? total.toFixed(2) : total;
};

const operatorPressed = operator => {
  if (accumulator.length === 0) {
    if (total === 0) {
      return;
    } else {
      accumulator = `${total}`;
    }
  }
  const lastChar = accumulator[accumulator.length - 1];
  if (isNaN(lastChar)) {
    accumulator = accumulator.substr(0, accumulator.length - 1);
  }
  updateAccumulator(accumulator + operator);
};

const equalPressed = () => {
  if (accumulator.length === 0) {
    return;
  }

  const val = document.querySelector(".calculator__output__total");
  val.removeAttribute("hidden");
  const result = eval(accumulator);
  updateTotal(result);
  updateAccumulator("");
};

const digitPressed = number => {
  const val = document.querySelector(".calculator__output__total");
  val.setAttribute("hidden", true);
  updateAccumulator(accumulator + number);
};

const clearCalculator = () => {
  const val = document.querySelector(".calculator__output__total");
  val.removeAttribute("hidden");
  updateAccumulator("");
  updateTotal(0);
};
const main = () => {
  updateTotal(0);
};

main();
