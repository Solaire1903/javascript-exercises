const contains = function (checkedObject, checkedValue) {
  if (Number.isNaN(checkedValue)) return true;
  
  if (
    typeof checkedObject !== "object" ||
    Array.isArray(checkedObject) ||
    checkedObject === null
  ) {
    

    const value = checkedObject;
    return value === checkedValue;
  }

  let containsValue = false;
  Object.keys(checkedObject).forEach((key) => {
    if (contains(checkedObject[key], checkedValue)) {
      containsValue = true;
    }
  });

  return containsValue;
};

// Do not edit below this line
module.exports = contains;
