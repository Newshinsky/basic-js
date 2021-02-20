const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
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
