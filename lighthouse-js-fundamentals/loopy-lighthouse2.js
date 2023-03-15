/*
function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (
      i % multiples[0] === 0 &&
      i % multiples[1] === 0 &&
      i % multiples[2] === 0 &&
      i % multiples[3] === 0
    ) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else if (i % multiples[2] === 0) {
      console.log(words[2]);
    } else if (i % multiples[3] === 0) {
      console.log(words[3]);
    } else {
      console.log(i);
    }
  }
}

console.log(
  loopyLighthouse(
    [15, 400],
    [2, 5, 17, 9.5],
    ["Batty", "Beacon", "Chicken and Chips", "PeanutButter"]
  )
);
*/

/*
function loops(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let result = '';
    if (
      i % multiples[0] === 0 &&
      i % multiples[1] === 0 &&
      i % multiples[2] === 0 &&
      i % multiples[3] === 0
    ) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else if (i % multiples[2] === 0) {
      console.log(words[2]);
    } else if (i % multiples[3] === 0) {
      console.log(words[3]);
    } else {
      console.log(i);
    }
  }
}
*/

// loops([15, 450], [1, 2, 5, 7], ["Pickle", "Peppers", "Onions", "Sweet Pepper"]);

function loops(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = "";
    for (let j = 0; j < multiples.length; j++) {
      if (i % multiples[j] === 0) {
        output += words[j];
      }
    }
    console.log(output || i);
  }
}

loops([15, 450], [1, 2, 5, 7], ["Pickle", "Peppers", "Onions", "Sweet Pepper"]);
