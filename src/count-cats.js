const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
if (array.length == 0){
return 0
}
let cats = 0;
let concatenated = array.reduce( function (previous, current) {
        return previous.concat(current);
        
});
for (let elem of concatenated) {
	if (elem == '^^') {
		cats++;
	}
}
return cats;
};
