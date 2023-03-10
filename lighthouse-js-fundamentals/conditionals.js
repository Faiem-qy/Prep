// CONDITIONAL EXECUTION
// IF STATEMENTS
/*
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your unbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside");

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}


const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/

// Logical Operators

// const isCitizen = true;
// const age = 26;
// if (isCitizen && age > 18) {
//   console.log("You are eligible to vote");
// }

// if (temperature < -40 || temperature > 40) {
//   console.log("Maybe going outside isn't such a good idea");
// }

// if (!raining) {
//   console.log("Leave your umbrella at home!");
// }

const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
};

whichSchool(1);
