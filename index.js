function validatePIN(pin) {
  return pin >= 0 &&
    !pin.includes(".") &&
    !pin.includes(" ") &&
    !pin.includes("\n") &&
    !pin.includes("-") &&
    !pin.includes("+") &&
    (pin.toString().length === 4 || pin.toString().length === 6)
    ? truei
    : false
}

console.log(validatePIN("+111"))
