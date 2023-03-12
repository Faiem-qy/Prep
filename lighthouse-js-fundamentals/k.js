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
