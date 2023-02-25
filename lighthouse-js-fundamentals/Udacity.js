/*
var x = 1;

while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if(x % 3 === 0){
    console.log("Julia");
  } else {
    console.log(x);
  }
    x = x + 1;
}
*/

/*
var num = 99;

while (num >= 1) {
  if (num === 1) {
    console.log(
      `${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around... ${
        num - 1
      } bottles of juice on the wall!`
    );
  } else if (num === 2) {
    console.log(
      `${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${
        num - 1
      } bottle of juice on the wall!`
    );
  } else {
    console.log(
      `${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${
        num - 1
      } bottles of juice on the wall!`
    );
  }
  num = num - 1;
}
*/
// var num = 99;

// while (num >= 1) {
// if(num === 1){
//     console.log(num + " bottle of juice on the wall! "
//               + num + " bottle of juice! Take one down, pass it around... "
//               + (num-1) + " bottles of juice on the wall!");
// }else if(num === 2){
//     console.log(num + " bottles of juice on the wall! "
//               + num + " bottles of juice! Take one down, pass it around... "
//               + (num-1) + " bottle of juice on the wall!");
// }else{
//     console.log(num + " bottles of juice on the wall! "
//              + num + " bottles of juice! Take one down, pass it around... "
//              + (num-1) + " bottles of juice on the wall!");
// }
// num = num - 1;
// }

//loops 6
/*
var num = 60;

while (num >= 0) {
  if (num === 50) {
    console.log('Orbiter transfers from ground to internal power');
  } else if (num === 31) {
    console.log('Ground launch sequencer is go for auto sequence start');
  } else if (num === 16) {
    console.log('Activate launch pad sound suppression system');
  } else if (num === 10) {
    console.log('Activate main engine hydrogen burnoff system');
  } else if (num === 6) {
    console.log('Main engine start');
  } else if (num === 0) {
    console.log('Solid rocket booster ignition and liftoff!');
  } else {
    console.log('T-' + num + ' seconds');
  }
  num = num - 1;
}
*/
// Let us take an iteration variable, that represent the remaining Time in seconds
// let n = 60;

// // While loop with a stop condition
// while (n >= 0) {
//   if (n === 50) {
//     console.log('Orbiter transfers from ground to internal power');
//   } else if (n === 31) {
//     console.log('Ground launch sequencer is go for auto sequence start');
//   } else if (n === 16) {
//     console.log('Activate launch pad sound suppression system');
//   } else if (n === 10) {
//     console.log('Activate main engine hydrogen burnoff system');
//   } else if (n === 6) {
//     console.log('Main engine start');
//   } else if (n === 0) {
//     console.log('Solid rocket booster ignition and liftoff!');
//   } else {
//     console.log('T-' + n + ' seconds');
//   }

//   //Never forget to decrement/increment the iteration variable in a while loop
//   // Otherwise, you loop will run infinite iterations
//   n = n - 1;
// }

// loops 9
// nested loop
// for (var x = 0; x < 5; x = x + 1) {
//   for (var y = 0; y < 3; y = y + 1) {
//     console.log(x + ',' + y);
//   }
// }

// increment decrement
// x++
// ++x
//z*=8
// 80
// z /= 4;
// 20

// loops 11
// rewrite the while loop as a for loop
// //var x = 9;
// while (x >= 1) {
//   console.log('hello ' + x);
//   x = x - 1;
// }
// for (let x = 9; x >= 1; x--) {
//   console.log('hello ' + x);
// }

// loops 12
// // fix the for loop
// // for (x < 10; x++) {
//  // console.log(x);
// // }

// for (var x = 5; x < 10; x++) {
//   console.log(x);
// }

// loops 13
// fix the for loop
// for (var k = 0 k < 200 k++) {
//   console.log(k);
// }

// for (var k = 0; k < 200; k++) {
//   console.log(k);
// }

// loops 14
// your code goes here
// let solution = 1

// for (i = 1; i <= 12; i ++){
//     solution *= i;
// }
// console.log(solution);

// loops 15
// * Write a nested for loop to print out all of the different seat combinations in the theater.
// * The first row-seat combination should be 0-0
// * The last row-seat combination will be 25-99
// *
// * Things to note:
// *  - the row and seat numbers start at 0, not 1
// *  - the highest seat number is 99, not 100
// */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */

// Write your code here

// for (let i = 0; i <= 25; i++) {
//   for (let j = 0; j <= 99; j++) console.log(i + '-' + j);
// }

//  Functions 5 Laugh it off

//  Programming Quiz: Laugh it Off 1 (5-1)

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// your code goes here
// function laugh() {
//   let l = "hahahahahahahahahaha!";
//   return l;
// }
// console.log(laugh());

//  functions 6
/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */
// let chuckle = "";

// function laugh(num) {
//   for (let i = 0; i < num; i++) {
//     chuckle = chuckle + "ha";
//   }
//   chuckle = chuckle + "!";
//   return chuckle;
// }

// console.log(laugh(3));

// 16

// * Programming Quiz: Build A Triangle (5-3)
// */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */

// creates a line of * for a given length
// function makeLine(length) {
//    var line = "";
//    for (var j = 1; j <= length; j++) {
//        line += "* ";
//    }
//    return line + "\n";
// }

// // your code goes here.  Make sure you call makeLine() in your own code.
// function buildTriangle(length) {
//   var triangle = "";
//   var line = 1;
//   for(line = 1; line <= length; line++){
//       triangle = triangle + makeLine(line);
//   }
//   return triangle
// }

// 20 Functions
/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */

// var l = "";

// var laugh = function (laughter){
//     for(var h = 0;h < laughter;h++){
//     l = l + "ha";
// }
// l = l + "!";
// return l;
// };
// console.log(laugh(3));

// 21 Functions

/*
 * Programming Quiz: Cry (5-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// your code goes here

// var cry = function cry (){
//   var tear = "boohoo!";
//   return tear;
// }

// console.log(cry());

// 22 functions
/*
 * Programming Quiz: Inline Functions (5-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */

// don't change this code
// emotions() function definition
// function emotions(myString, myFunc) {
//   console.log("I am " + myString + ", " + myFunc(2));
// }

// // your code goes here
// emotions("happy",function (h){
//   var sound = "";
//   for(var i = 0; i < h;i++){
//       sound = sound + "ha";
//   }
//   sound = sound + "!";
//   return sound;
// });

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

// -----------ARRAYS-------------------

// 6.0
/* QUIZ REQUIREMENTS
 * - Your code should have a variable `udaciFamily`
 * - The variable `udaciFamily` should be an array containing the values `"Julia"`, `"James"`, and one other name
 * - Your code should print `udaciFamily` to the console
 * - BE CAREFUL ABOUT THE EXACT WORDS TO BE PRINTED.
 */
/*
// your code goes here
let udaciFamily = ["Julia", "James", "Fred"];
console.log(udaciFamily);
*/
// 7.
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - The variable `crew` should be an array containing the Serenity\'s crew
 * - Your code should print `crew` to the console as an array. Do not iterate over the elements.
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
/*
let crew = ["Mal", "Zoe", "Wash", "Inara", "Jayne", "Kaylee"];
console.log(crew);
*/
// 8.0

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements.
 */
/*
var prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];

// your code goes here
prices[0] = 1.24;
prices[2] = 90.12;
prices[6] = 1.11;
console.log(prices);

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(0, 0, "chocolate cruller", "creme de leche");

console.log(donuts);
*/
/*
Following is the syntax of splice() method: arrayName.splice(arg1, arg2, item1, ....., itemX); where,

arg1 = Mandatory argument. Specifies the starting index position to add/remove items. You can use a negative value to specify the position from the end of the array e.g., -1 specifies the last element.

arg2 = Optional argument. Specifies the count of elements to be removed. If set to 0, no items will be removed.

item1, ....., itemX are the items to be added at index position arg1

splice() method returns the item(s) that were removed.
*/

// 14 arrays

/*
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */
/*
var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");
console.log(rainbow);
*/
// 15 Quiddich Cup
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false.
 */
/*
let team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter",
];

function hasEnoughPlayers(team) {
  if (team.length >= 7) {
    return true;
  } else {
    return false;
  }
}

console.log(hasEnoughPlayers(team));
*/
// 16 Joining the Crew

/* * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
 * - Your code should use the `push()` method to add new members to the `crew` array
 * - Print the array on the console at the end
 */

/*
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push("Simon", "River", "Book");
console.log(crew);
*/

// 20 Another Type of loop
/*
 * Programming Quiz: Another Type of Loop (6-8)
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable
 */

/*
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here

test.forEach(function (element, index) {
if (element % 3 === 0) {
  console.log(element);
  test[index] = test[index];
  test[index] = test[index] + 100;
} else {
  console.log(`These numbers-> ${element} are not divisible by 2`);
}
});
console.log(test);

*/

//22 I Got Bills
/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `bills` and `totals`
 * - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
 * - Your `totals` array should be an array of numbers
 * - Your code should print the `totals` array to the console
 * - The output must be as described above.
 */

/*
var bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
  100.1, 6.77, 2.22,
];

var totals = bills.map(function (element) {
  element = element * 1.15;
  element = element.toFixed(2);
  element = Number(element);
  return element;
});

console.log(bills);
console.log(totals);
*/

/*
// 24 2D Arrays

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"],
];

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}
*/

// 25 Nested numbers

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100],
];

for (var r = 0; r < numbers.length; r++) {
  for (var c = 0; c < numbers[r].length; c++) {
    if (numbers[r][c] % 2 === 0) {
      numbers[r][c] = "even";
    } else {
      numbers[r][c] = "odd";
    }
  }
}
console.log(numbers);

// -------------------OBJECTS------------------

// 3. Umbrella

/*
 * Programming Quiz: Umbrella (7-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

/*
var umbrella = {
  color: "pink",
  isOpen: true,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  // your code goes here
  close: function () {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
  },
};

*/

// 8. Quiz:Menu items

/*
 * Programming Quiz: Menu Items (7-2)
 * Create an object named `breakfast`.
 * The object should contain properties for the `name`, `price`, and `ingredients`.
 * Print the entire object on the console
 */

// your code goes here

/*
const breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
};

console.log(breakfast);
*/

// 9. Quiz Bank Accounts

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount`
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

/*
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  // your code goes here
  printAccountSummary: function () {
    return `Welcome! \nYour balance is currently $${savingsAccount.balance} and your interest rate is ${this.interestRatePercent}%.`;
  },
};

console.log(savingsAccount.printAccountSummary());
*/

// 11. Quiz Facebook Profile
/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */

// TIP -
// In an array,
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
