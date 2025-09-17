function isSameType(value1, value2) {
  // Check if both are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  // Otherwise, compare types
  return typeof value1 === typeof value2;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert strings to numbers if possible
const num1 = Number(value1);
const num2 = Number(value2);

// If both converted to numbers are NaN, keep original strings
const val1 = Number.isNaN(num1) ? value1 : num1;
const val2 = Number.isNaN(num2) ? value2 : num2;

alert(isSameType(val1, val2));
