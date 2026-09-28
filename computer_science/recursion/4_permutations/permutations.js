const permutations = function (array) {
  //Base Case
  if (array.length < 2) return [array];

  if (array.length === 2) {
    const secondPermutation = [array[1], array[0]];
    return [array, secondPermutation];
  }

  //Recursive Case
  const permutationsArray = [];

  for (let i = array.length; i > 0; i--) {
    const subArray = array.filter((value) => value !== i);
    const singleArray = array.filter((value) => value === i);

    permutations(subArray).forEach((permutations) => {
      const newPermutation = permutations.concat(singleArray);
      permutationsArray.push(newPermutation);
    });
  }

  return permutationsArray;
};

// Do not edit below this line
module.exports = permutations;
