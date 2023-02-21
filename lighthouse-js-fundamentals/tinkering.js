/* 

//Voting stations

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

function chooseStations(stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];

    if (capacity >= 20) {
      const location = station[2];

      if (location === "school" || location === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));

*/
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

/*
//using Math.trunc
let number = 1500;

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
*/

/*
//using Math.floor
let number = 0;
function howManyHundreds2(number) {
  if (number) {
    return Math.floor(number / 100);
  }
}

console.log(howManyHundreds2(199));
*/

// Area Calculators

function calculateRectangleArea(length, width) {
  let area = length * width;
  if (area <= 0) {
    return undefined;
  } else {
    return area;
  }
}

function calculateTriangleArea(base, height) {
  let area = (base * height) / 2;
  if (area <= 0) {
    return undefined;
  } else {
    return area;
  }
}

function calculateCircleArea(radius) {
  // let area = Math.PI * (radius * radius); // ||
  let area = Math.PI * Math.pow(radius, 2);

  if (radius <= 0) {
    return undefined;
  } else {
    return area;
  }
}

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
