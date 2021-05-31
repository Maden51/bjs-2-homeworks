function solveEquation(a, b, c) {
  "use strict";
  let discriminant;
  let x;
  let y;
  let arr;
  discriminant = (b ** 2) - (4 * a * c);
  if (discriminant < 0) {
    arr = [];
  }
  else if (discriminant === 0) {
    x = -b / (2 * a);
    arr = [x];
  }
  else if (discriminant > 0) {
    x = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    y = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    arr = [x, y];
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount;
  let now = Math.floor(Date.now() / 2.628e+9);
  let s = amount - contribution;
  let n = (Math.floor(date / 2.628e+9) - now);
  let p = (percent / 12) / 100;
  let monthAmount;
  monthAmount = s * (p + p / (((1 + p) ** n) - 1));
  totalAmount = (monthAmount * n).toFixed(2);
  console.log(totalAmount);
  return +totalAmount;
}
