const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
if (!Array.isArray(arr)) throw 'Error'


let options = [
'--discard-next',
'--double-next',
'--discard-prev',
'--double-prev' 
]


let newArr = [...arr];

for (i = 0; i < newArr.length; i++){

if (newArr.includes(options[0])) {

newArr.splice(newArr.indexOf(options[0]) + 1, 1, null)

} 

if (newArr.includes(options[1])) {

newArr.splice(newArr.indexOf(options[1]) , 1, newArr[newArr.indexOf(options[1])+1])

}

if (newArr.includes(options[2])) {
if(newArr.indexOf(options[2]) === 0) {
newArr.shift()

} else {
newArr.splice(newArr.indexOf(options[2]) -1 , 1, null)
}
}

if (newArr.includes(options[3])) {

newArr.splice(newArr.indexOf(options[3]) , 1, newArr[newArr.indexOf(options[3])-1])

}
}

newArr = newArr.filter(function( element ) {

   return element !== null && element !== '--discard-prev' && element !== '--discard-next' && element !== undefined;
   
});

return newArr;
};
