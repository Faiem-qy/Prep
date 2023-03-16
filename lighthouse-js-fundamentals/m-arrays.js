function merge(arr1, arr2) {
  let result = arr1.concat(arr2);
  result.sort((a, b) => a - b); // returns ascending(b-a will result in descending)
  return result;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
