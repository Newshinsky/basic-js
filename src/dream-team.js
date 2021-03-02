const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  
  
  array = array.filter(item => typeof item === "string");

  let checkArray;
  if (checkArray = Array.isArray(array)) {

    array = array;
  } else {
    return false;
  }
  if (arguments.length == 0) {
    return null;
  }



  const result = array.reduce((accumulator, currentValue) => {
    const item = currentValue.trim()

    if (item !== '') {
      accumulator.push(item);
    }

    return accumulator;
  }, [])

  let firstUpperLetter = result.map(upPer);
  function upPer(value) {
    return value[0].toUpperCase() + value.substr(1);
  }
  let firstLetter = firstUpperLetter.sort().map(e => e[0])

  return firstLetter.join('');
};
