// function isOdd(number) {
//   if (number % 2 == 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log("3 is odd: " + isOdd(3));
// console.log("8 is odd: " + isOdd(8));

/*
const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = function (stations) {
  // Your code in here ...
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];

    if (capacity >= 20) {
      const type = station[2];

      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
};

console.log(chooseStations(stations));

*/
// x marks the perfect shot
const moves = ["north", "north", "west", "west", "north", "east", "north"];

function finalPosition(moves) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      y++;
    } else if (moves[i] === "south") {
      y--;
    } else if (moves[i] === "east") {
      x++;
    } else if (moves[i] === "west") {
      x--;
    }
  }
  return [x, y];
}

console.log(finalPosition(moves));
