// K1

/*
unction sumLargestNumbers(arr) {
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
