"use strict";

/*
const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];

console.log("My favourite " + director + " film is " + films[2]);

films[2] = "Jurassic Park";
films;
films.push("A.I.");
films;

console.log("My favourite " + director + " film is " + films[2]); // after mutation

console.log("films at index 0: " + films[0]);
console.log("films at index 1: " + films[1]);
console.log("films at index 2: " + films[2]);
console.log("films at index 3: " + films[3]);

// const oddNumbers = [1, 3, 5, 7, 9];
// const randomStuff = [1.15, "bicycle", true];

console.log(director + " is the director of " + films.length + " films");

films.push("E.T.");
console.log("films at index 4: " + films[4]);
console.log(director + " is the director of " + films.length + " films");

*/

/*
//arrays ice cream!

const iceCreamFlavours = [
  "chocolate",
  "vanilla",
  "cookies and cream",
  "rocky road",
  "strawberry",
];
console.log(iceCreamFlavours);

iceCreamFlavours.push("root beer");
console.log(iceCreamFlavours);
console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours[5]);
console.log(iceCreamFlavours.length);

*/
// const packingList = ["tent", "bug spray", "sleeping bag"];

// console.log(packingList[0]);
// console.log(packingList[1]);
// console.log(packingList[2]);

/*
//Range - loop
const range = function (start, end, step) {
  let array = [];
  if (start === undefined || end === undefined || step === undefined) {
    return array;
  } else if (start > end) {
    return array;
  } else if (step <= 0) {
    return array;
  } else {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  }
  return array;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

console.log(range(5, 12, undefined));
console.log(range(5, 2, 3));
console.log(range(-5, 2, 0));

*/

/*
// lastindexof

const lastIndexOf = function (arr, val) {
  return val ? arr.lastIndexOf(val) : -1;
};
console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
console.log(lastIndexOf([0, 1, 4, 1, 2], 2));
console.log(lastIndexOf([0, 1, 4, 1, 2], 3));
console.log(lastIndexOf([5, 5, 5], 5));
console.log(lastIndexOf([], 3));

*/

// concatenate arrays
/*
const concat = (a, b) => {
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  return a;
};

console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([0, 3, 1], [9, 7, 2]));
console.log(concat([], [9, 7, 2]));
console.log(concat([5, 10], []));
*/
