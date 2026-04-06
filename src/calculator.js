function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Intentionally buggy function for CI lab: returns sum + 10
function addWrong(a, b) {
  return a + b + 10;
}

module.exports = { add, subtract, multiply, divide, addWrong };