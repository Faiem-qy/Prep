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
function laugh() {
  let l = "hahahahahahahahahaha!";
  return l;
}
console.log(laugh());

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
let chuckle = "";

function laugh(num) {
  for (let i = 0; i < num; i++) {
    chuckle = chuckle + "ha";
  }
  chuckle = chuckle + "!";
  return chuckle;
}

console.log(laugh(3));
