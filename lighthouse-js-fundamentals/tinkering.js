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
