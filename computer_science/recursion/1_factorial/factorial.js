const factorial = function (n) {
  if (typeof n !== "number" || n < 0 || n % 1 !== 0) return undefined;

  if (n === 0) return 1;

  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;
