const permutations = function (array) {
  //Base Cases
  if (array.length < 2) return [array];

  if (array.length === 2) {
    const secondPermutation = [array[1], array[0]];
    return [array, secondPermutation];
  }
};

// Do not edit below this line
module.exports = permutations;
