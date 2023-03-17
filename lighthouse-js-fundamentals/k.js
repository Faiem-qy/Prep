// K1

/*
function sumLargestNumbers(arr) {
  let lNum1 = 0;
  let lNum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lNum1) {
      lNum2 = lNum1;
      lNum1 = arr[i];
    } else if (arr[i] > lNum2) {
      lNum2 = arr[i];
    }
  }

  return lNum1 + lNum2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
*/

/*
function sumLargestNumbers(arr) {
  let highestNumber1 = 0;
  let highestNumber2 = 0;
  let highestNumber3 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestNumber1) {
      highestNumber3 = highestNumber2;
      highestNumber2 = highestNumber1;
      highestNumber1 = arr[i];
    } else if (arr[i] > highestNumber2) {
      highestNumber3 = highestNumber2;
      highestNumber2 = arr[i];
    } else if (arr[i] > highestNumber3) {
      highestNumber3 = arr[i];
    }
  }

  return highestNumber1 + highestNumber2 + highestNumber3;
}

console.log(sumLargestNumbers([52, 2, 5, 6]));
*/

/*
// k2

const conditionalSum = function (values, condition) {
  let total = 0;
  for (let i = 0; i < values.length; i++)
    if (
      (condition === "even" && values[i] % 2 === 0) ||
      (condition === "odd" && values[i] % 2 !== 0)
    ) {
      total += values[i];
    }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
*/

/*
const conditionalSum = function (values, condition) {
  let total = 0;
  for (let i = 0; i < values.length; i++)
    if (
      (condition === "even" && values[i] % 2 === 0) ||
      (condition === "odd" && values[i] % 2 !== 0)
    ) {
      total += values[i];
    }
  return total;
};

console.log(conditionalSum([2, 3, 5, 4, 7], "odd"));
*/

/*
// K3
const numberOfVowels = function (data) {
  let vowels = ["a", "e", "i", "o", "u"];
  let answer = 0;
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < data.length; j++) {
      console.log(vowels[i], data[j]);
      if (vowels[i] == data[j]) {
        answer += 1;
      }
    }
  }
  return answer;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// alternate
const numberOfVowels = function (data) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < data.length; i++) {
    if (vowels.includes(data[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};
*/

// k4 Instructors names

// const instructorWithLongestName = function (instructors) {
//   let length = "";
//   let instructorsAnswer;
//   //loop through names
//   for (let i = 0; i < instructors.length; i++) {
//     //compare lengths
//     if (instructors[i].name.length > length) {
//       length = instructors[i].name.length;
//       // console.log(length);
//       instructorsAnswer = instructors[i];
//       // console.log(instructorsAnswer);
//     }
//   }
//   return instructorsAnswer;
// };

// console.log(
//   instructorWithLongestName([
//     { name: "Samuel", course: "iOS" },
//     { name: "Jeremiah", course: "Web" },
//     { name: "Ophilia", course: "Web" },
//     { name: "Donald", course: "Web" },
//   ])
// );
// console.log(
//   instructorWithLongestName([
//     { name: "Matthew", course: "Web" },
//     { name: "David", course: "iOS" },
//     { name: "Domascus", course: "Web" },
//   ])
// );

// ||
/*
const instructorWithLongestName = function (instructors) {
  return instructors.reduce((prev, current) => {
    if (current.name.length > prev.name.length) {
      return current;
    } else {
      return prev;
    }
  });
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
    { name: "Jeremiah", course: "Web" },
  ])
); // {name: "Jeremiah", course: "Web"}

console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
); // {name: "Domascus", course: "Web"}
*/

// K5
/*
const urlEncode = function(text) {
  // Put your solution here
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for

// output
// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure


// const urlEncode = function (text) {
//   text = text.trim();
//   let replace = text.split(" ").join("%20");
//   return replace;
// };

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));

*/

/*
// K6

// const spots = [
//   ["s", "s", "s", "s", "s", "s"],
//   ["s", "m", "s", "S", "r", "s"],
//   ["s", "m", "s", "S", "r", "s"],
//   ["S", "r", "s", "m", "r", "s"],
//   ["S", "r", "s", "m", "R", "s"],
//   ["S", "r", "S", "M", "m", "S"],
// ];

// const vehicle = "regular"; // small, motorcycle

//[x,y]

//regular can park in 'regular spots'
// small cars  can park in 'regular or small spots'
//motorcycles can park r,s,m
const whereCanIPark = (spots, vehicle) => {
  for (let y = 0; y < spots.length; y++) {
    // console.log(spots[y]);
    for (let x = 0; x < spots[y].length; x++) {
      // console.log("SPOT: ", spots[y]);
      const spot = spots[y][x];

      if (vehicle === "regular") {
        if (spot === "R") {
          return [x, y];
        }
      } else if (vehicle === "small") {
        if (spot === "R" || spot === "S") {
          return [x, y];
        }
      } else if (vehicle === "motorcycle") {
        if (spot === "R" || spot === "S" || spot === "M") {
          return [x, y];
        }
      }
    }
  }
  return false;
};

// const result = whereCanIPark(spots, vehicle);
// console.log(result);

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],

    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
*/

/*
// K7

const checkAir = function (samples, threshold) {
  {
    // console.log(samples);
    // console.log(threshold);
    for (let i = 0; i < samples.length; i++) {
      if (threshold < 0.4) {
        return "polluted";
      } else {
        return "clean";
      }
    }
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
*/
/*
// K9
//first number is the value to be repeated
// the second value is the number of times the first number should be repeated

const repeatNumbers = function (data) {
  let result = "";

  for (let i = 0; i < data.length; i++) {
    let num = data[i][0];
    let repeat = data[i][1];

    for (let j = 0; j < repeat; j++) {
      result += num;
    }
    if (i < data.length - 1) {
      result += ", ";
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));

console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);

console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
*/

// k9 Case Maker
// change first letter in every work to uppercase
// remove spaces from strings

const camelCase = function (input) {
  let string = input.split(" "); // split string into array of words
  //using more spaces changes the array from letters(''))[a,b,c], (' ')['abc']('   ')["abc def ghi jkl"]
  // return string;
  let uppercase = string.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return uppercase.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious

//k10 Multiplication Table
const multiplicationTable = function (maxValue) {
  let table = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      table += i * j + " ";
    }
    table += "\n";
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
