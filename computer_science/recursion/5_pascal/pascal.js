const pascal = function (n) {
  //Base Case
  if (n < 1) return [];
  if (n === 1) return [1];

  //Recursive Case
  const previousRow = pascal(n - 1);
  previousRow.unshift(0);
  previousRow.push(0);

  const currentRow = [];
  for (let i = 0; i < n; i++) {
    currentRow.push(previousRow[i] + previousRow[i + 1]);
  }

  return currentRow;
};

// Do not edit below this line
module.exports = pascal;
