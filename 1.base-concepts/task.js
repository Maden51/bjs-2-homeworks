"use strict";
function solveEquation(a, b, c) {
  const discriminant = (b ** 2) - (4 * a * c);
  if (discriminant > 0) {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant === 0) {
    return [-b / (2 * a)];
  }
  return [];
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent) === true || percent === '' || percent === ' ') {
    return (`Параметр Процентная ставка содержит неправильное значение ${percent}`);
  } else if (isNaN(contribution) === true || contribution === '' || contribution === ' '){
    return (`Параметр Начальный взнос содержит неправильное значение ${contribution}`)
  } else if (isNaN(amount) === true || amount === '' || amount === ' ') {
    return (`Параметр Общая стоимость содержит неправильное значение ${amount}`)
  } else {
    const now = Math.floor(Date.now() / 2.628e+9);
    const sum = Number(amount) - Number(contribution);
    const monthCount = (Math.floor(date / 2.628e+9) - now);
    const percentPart = Number(percent) / 12 / 100;
    const monthAmount = sum * (percentPart + percentPart / (((1 + percentPart) ** monthCount) - 1));
    const totalAmount = Number((monthAmount * monthCount).toFixed(2));
    console.log(totalAmount);
    return totalAmount;
  }
}
