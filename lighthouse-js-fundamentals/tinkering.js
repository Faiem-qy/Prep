/*
function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

function ageCalculator(name, yearOfBirth, currnetYear) {
  const age = currnetYear - yearOfBirth;

  return `${name} is ${age} years old.`;
}
console.log(ageCalculator("Suzie", 1989, 2015));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

*/

let number = 987654321;
function howManyHundreds(number) {
  if (number < 100) {
    return `There are ${0} hundreds`;
  } else if (number >= 100 && number < 1000) {
    return `There are ${Math.trunc(number / 100)} hundreds`;
  } else if (number >= 1000) {
    return `There are ${Math.trunc(number / 100)} hundreds`;
  }
}
console.log(howManyHundreds(number));

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
