const totalIntegers = function (checkedObject, depth = 0) {
  //Base Case

  //Object is neither an Object, nor an Array (Arrays count as Objects with typeof)
  if (typeof checkedObject !== "object") {
    //If first function call isn't called with an Array or Object, return undefined
    if (depth === 0) return undefined;

    if (typeof checkedObject === "number" && checkedObject % 1 === 0) {
      return 1;
    }
    return 0;
  }

  //Object is null or undefined
  if (checkedObject === null || checkedObject === undefined) return 0;

  //Recursive Case
  let integerCount = 0;
  //Object is an Array
  if (Array.isArray(checkedObject)) {
    checkedObject.forEach((element) => {
      integerCount += totalIntegers(element, depth + 1);
    });
  }
  //Object is a plain JS Object
  else {
    Object.keys(checkedObject).forEach((key) => {
      integerCount += totalIntegers(checkedObject[key], depth + 1);
    });
  }

  return integerCount;
};

// Do not edit below this line
module.exports = totalIntegers;
