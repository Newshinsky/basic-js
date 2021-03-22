const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direct = true
  constructor(type) {
    if (type === false) {
      this.direct = false
    }
  }
  encrypt(message, key ){
    if (!message || !key) throw "Error";
    /****************Приводим в порядок аргументы***********************/
    
    let newMessage = message.toLowerCase().replace(/\s+/g, '').trim();
    let newKey = key.toLowerCase().replace(/\s+/g, '').trim()
  
    /**************** Проверяем Длину***********************/
    
    for (let i = 0; i < newMessage.length; i++) {  
        newKey += newKey[i%newKey.length];
      }
      newKey = newKey.slice(0,newMessage.length)
  
    /****************Получаем цифры сообщения и ключа***********************/
    
    
    newMessage = newMessage.split('')
    newKey = newKey.split('')
    
    let arrMes = newMessage.map(letter => letter.charCodeAt(0) - 97)
    let arrkey = newKey.map(letter => letter.charCodeAt(0) - 97)
    

    
    
    /****************Суммируем значения***********************/
    
    let arrNum = []
    
    for (i = 0; i<arrMes.length; i++){
    
    let sum = arrMes[i] + arrkey[i]
    if (sum >= 26){
    
    sum =  sum - 26 
    }
    arrNum.push(sum)
    
    }

    /****************Получаем слово***********************/
    
    let wordNum = arrNum.map(function(num){
    return String.fromCharCode(num+97)
    })
    
    wordNum = wordNum.join("").toUpperCase();
    
    
    
    
    let final = ''
    for(j = 0; j <message.length; j++){
    if(/^[a-zA-Z]+$/.test(message[j])){
    
    final += wordNum[j]
    
    } else {
    
    
    
    final += message[j]
    wordNum = wordNum.slice(0,j) + " " + wordNum.slice(j)
    }
    
    }
    if (this.direct){

       return final;
      
      } else {

    return final.split('').reverse().join('');

    }
  }
    
    decrypt(message, key ){

      if (!message || !key) throw "Error";
      /****************Приводим в порядок аргументы***********************/
      let newMessage = message.toLowerCase().replace(/\s+/g, '').trim();
      let newKey = key.toLowerCase().replace(/\s+/g, '').trim()

      
      
      
      /******************** Проверяем Длину*************************/
      
      for (let i = 0; i < newMessage.length; i++) {  
          newKey += newKey[i%newKey.length];
        }
        newKey = newKey.slice(0,newMessage.length)
  
      
      
      /****************Получаем цифры сообщения и ключа***********************/
      
      
      newMessage = newMessage.split('')
      newKey = newKey.split('')
      
      let arrMes = newMessage.map(letter => letter.charCodeAt(0) - 97)
      let arrkey = newKey.map(letter => letter.charCodeAt(0) - 97)

      
      /****************Суммируем значения***********************/
      
      let arrNum = []
      
      for (i = 0; i<arrMes.length; i++){
      
      let sum = arrMes[i] - arrkey[i]
      if (sum < 0){
      
      sum =  arrMes[i] - arrkey[i] + 26
      }
      arrNum.push(sum)
      
      }

      
      /****************Получаем слово***********************/
      
      let wordNum = arrNum.map(function(num){
      return String.fromCharCode(num+97)
      })
      
      wordNum = wordNum.join("").toUpperCase();
      
      
      
      
      let final = ''
      for(j = 0; j <message.length; j++){
      if(/^[a-zA-Z]+$/.test(message[j])){
      
      final += wordNum[j]
      
      } else {
      
      
      
      final += message[j]
      wordNum = wordNum.slice(0,j) + " " + wordNum.slice(j)
      }
      
      }
      if (this.direct){

        return final;
       
       } else {
 
     return final.split('').reverse().join('');
 
     }
      }
      
}

module.exports = VigenereCipheringMachine;
