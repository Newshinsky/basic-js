const CustomError = require("../extensions/custom-error");

const chainMaker = {

	chain: [],

  getLength() {
 	return this.chain.length;
  
  },
  addLink(value) {
  	
		if (arguments.length == 0){
    
    this.chain.push(' ')
    } else {
  
  
   	this.chain.push(String(`( ${value} )`))
    }
    return this;
  },
  removeLink(position) {
 if (position > 0 ) {
 
 this.chain.splice(position-1, 1);
 
 } else {
 
 throw Error ('Error');
 
 }

  return this;
  },
  
  reverseChain() {
  this.chain.reverse();
  return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    return result;
  }
};

module.exports = chainMaker;
