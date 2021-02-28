const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let needTurns  = Math.pow(2,disksNumber)-1;
  let needSeconds = 	Math.floor(needTurns / turnsSpeed * 60 * 60);

  return { turns: needTurns, seconds: needSeconds }
};
