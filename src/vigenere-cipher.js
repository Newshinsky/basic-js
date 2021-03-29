const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct) {
    this.direct = true;
    if (direct === false) {
      this.direct = false;
    }
  }


  encrypt(message, key) {
    if (arguments.length < 2) throw new Error;

    let strArr = message.toLowerCase().split('');
    let lettersArr = strArr.filter(val => val.match(/[a-z]/));
    let newMessage = lettersArr.join('');
    let newKey = key.toLowerCase();
  
    /**************** Проверяем Длину***********************/
    
    for (let i = 0; i < newMessage.length; i++) {  
        newKey += newKey[i%newKey.length];
      }
      newKey = newKey.slice(0,newMessage.length);
  
    /****************Получаем цифры сообщения и ключа***********************/
    
    
    newMessage = newMessage.split('');
    newKey = newKey.split('');
    
    let arrMes = newMessage.map(letter => letter.charCodeAt(0) - 97);
    let arrkey = newKey.map(letter => letter.charCodeAt(0) - 97);

    
    
    /****************Суммируем значения***********************/
    
    let arrNum = [];
    
    for (i = 0; i<arrMes.length; i++){
    
    let sum = arrMes[i] + arrkey[i];
    if (sum >= 26){
    
    sum =  sum - 26 ;
    }
    arrNum.push(sum);
    
    }

    /****************Получаем слово***********************/
    
    let cipher = [];
    for (let h = 0; h < arrNum.length; h++) {
      cipher.push(String.fromCharCode(arrNum[h] + 97));
    }

    let final = [];
    let count = 0;
    for (let r = 0; r < strArr.length; r++) {
      if (!strArr[r].match(/[a-z]/)) {
        final.push(strArr[r]);
        count++;
      } else {
        final.push(cipher[r - count]);
      }
    }

    if (!this.direct) final.reverse();
    return final.join('').toUpperCase();
  }


  decrypt(message, key) {
    if (arguments.length < 2) throw new Error;

    if (!message || !key) throw "Error";
    /****************Приводим в порядок аргументы***********************/
    let strArr = message.toLowerCase().split('');
    let lettersArr = strArr.filter(val => val.match(/[a-z]/));
    let newMessage = lettersArr.join('');
    let newKey = key.toLowerCase();

    
    
    
    /******************** Проверяем Длину*************************/
    
    for (let i = 0; i < newMessage.length; i++) {  
        newKey += newKey[i%newKey.length];
      }
      newKey = newKey.slice(0,newMessage.length);

    
    
    /****************Получаем цифры сообщения и ключа***********************/
    
    
    newMessage = newMessage.split('');
    newKey = newKey.split('');
    
    let arrMes = newMessage.map(letter => letter.charCodeAt(0) - 97);
    let arrkey = newKey.map(letter => letter.charCodeAt(0) - 97);

    
    /****************Суммируем значения***********************/
    
    let arrNum = [];
    
    for (i = 0; i<arrMes.length; i++){
    
    let sum = arrMes[i] - arrkey[i];
    if (sum < 0){
    
    sum =  arrMes[i] - arrkey[i] + 26;
    }
    arrNum.push(sum);
    
    }

    
    /****************Получаем слово***********************/
    let string = [];
    for (let h = 0; h < arrNum.length; h++) {
      string.push(String.fromCharCode(arrNum[h] + 97));
    }

    let final = [];
    let count = 0;
    for (let r = 0; r < strArr.length; r++) {
      if (!strArr[r].match(/[a-z]/)) {
        final.push(strArr[r]);
        count++;
      } else {
        final.push(string[r - count]);
      }
    }

    if (!this.direct) final.reverse();
    return final.join('').toUpperCase();
  }

}

module.exports = VigenereCipheringMachine;
