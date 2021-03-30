const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw 'Error'
    let options = ['--discard-next', '--double-next', '--discard-prev', '--double-prev']
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === options[0]) {
            i++;
        } else if (arr[i] === options[1]) {
            newArr.push(arr[i + 1]);
        } else if (arr[i] === options[2]) {
            if (arr[i - 2] !== options[0]) {
                newArr.pop();
            }
        } else if (arr[i] === options[3]) {
            if (arr[i - 2] !== options[0]) {
                newArr.push(newArr[newArr.length - 1]);
            }
        } else {
            newArr.push(arr[i]);
        }
    }
    newArr = newArr.filter(function(element) {
        return element !== undefined;
    });
    return newArr;
};
