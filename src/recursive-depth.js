const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 calculateDepth(arr) {
  
 
let result = 1;
let depth = 0 ;
for(let i = 0; i < arr.length; ++i) {

    if (Array.isArray(arr[i])) {
      depth = this.calculateDepth(arr[i]) + 1;
    if (depth > result) {
        result = depth;
    }
  }
}
return result;

  

  	};  
};
