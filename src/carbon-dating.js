const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(string) {
  if (typeof string !== 'string' || arguments.length == 0 || string <= 0 || string > 15) {
    return false;
  }
  num = +string;

  if (isNaN(num) || num == '' || num == ' ') {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let numerator = MODERN_ACTIVITY / string;
  let baseLog = 2.7182818284;

  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

  return Math.ceil(getBaseLog(baseLog, numerator) / k);
};
