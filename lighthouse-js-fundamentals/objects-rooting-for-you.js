const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...

  let highGrade = vegetables[0][metric];
  let indexFarmer = 0;
  vegetables.forEach((element, index) => {
    if (element[metric] >= highGrade) {
      highGrade = element[metric];
      indexFarmer = index;
    }
  });
  return vegetables[indexFarmer].submitter;
};

console.log(judgeVegetable(vegetables, metric));
