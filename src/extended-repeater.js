const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    str = String(str)

  let repeatTimes = options.repeatTimes;
  if (repeatTimes === undefined) {
  repeatTimes = 1;
  }
  
  let separator  = options.separator;
  if (separator === undefined){
  separator = '+'
  }
  
  let addition = options.addition;
  if (addition === undefined){
  addition = ''
  } else {
  addition = String(addition);
  }
  
  let additionRepeatTimes  = options.additionRepeatTimes;
  if (additionRepeatTimes === undefined){
  additionRepeatTimes = 1;
  }
  
  let additionSeparator  = options.additionSeparator;
  if (additionSeparator === undefined){
  additionSeparator = '|'
  }
  
    
    let newStr = '';
    let addStr = '';
    let result = '';
    
    
    for (j = 0; j < additionRepeatTimes; j++ ){
    
    
   addStr += addition + additionSeparator;
  
   } 
   
   addStr =  addStr.slice(0,addStr.length - additionSeparator.length)
    
   newStr = str + addStr 
   
   for (i = 0; i < repeatTimes; i++ ){
    
  
  result += newStr + separator; 
   
   }
   
  result =  result.slice(0,result.length - separator.length)
  
  return result;
  
};
  
