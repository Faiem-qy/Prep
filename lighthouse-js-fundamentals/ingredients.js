const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

console.log("---While Loop---");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("---For Loop---");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("---Reverse Loop---");
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
