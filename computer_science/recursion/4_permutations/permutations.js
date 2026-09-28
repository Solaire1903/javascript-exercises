const permutations = function (array) {
  //Base Case
  if (array.length < 2) return [array];

  //Recursive Case
  const permutationsArray = [];

  for (let i = array.length; i > 0; i--) {
    const subArray = array.filter((value) => value !== array[i - 1]);
    const singleArray = array.filter((value) => value === array[i - 1]);

    permutations(subArray).forEach((permutations) => {
      const newPermutation = permutations.concat(singleArray);
      permutationsArray.push(newPermutation);
    });
  }

  return permutationsArray;
};

// Do not edit below this line
module.exports = permutations;
