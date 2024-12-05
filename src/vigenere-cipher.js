const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(directOrder = true) {
    this.directOrder = directOrder;
  }

  encrypt(message, key){
    if (!message || !key ) {
      throw new Error("Incorrect arguments!")}

    key = key.toUpperCase();
    message = message.toUpperCase();
    let encodedMessage = '';
    let messagePosition;
    let keyPosition;
    let cipherPosition;
    let keyIterator = 0;

    for(let i = 0; i < message.length; i++, keyIterator++){
      messagePosition = message[i].charCodeAt(0);
      if (messagePosition < 65 || messagePosition > 90) {
          encodedMessage += message[i];
          keyIterator--;
        } else {
        keyPosition = key[keyIterator % key.length].charCodeAt(0);
        cipherPosition = messagePosition + keyPosition - 65;
        if (cipherPosition > 90) cipherPosition -= 26;
        encodedMessage += String.fromCharCode(cipherPosition);
      }
    }
    if (this.directOrder) return encodedMessage;
    return encodedMessage.split('').reverse().join('');
  }

  decrypt(message, key){
    if (!message || !key ) {
      throw new Error("Incorrect arguments!")}
    key = key.toUpperCase();
    message = message.toUpperCase();
    let decodedMessage = '';
    let messagePosition;
    let keyPosition;
    let cipherPosition;
    let keyIterator = 0;

    for(let i = 0; i < message.length; i++, keyIterator++){
      messagePosition = message[i].charCodeAt(0);
      if (messagePosition < 65 || messagePosition > 90) {
          decodedMessage += message[i];
          keyIterator--;
        } else {
        keyPosition = key[keyIterator % key.length].charCodeAt(0);
        cipherPosition = messagePosition - keyPosition + 65;
        console.log(cipherPosition);

        if (cipherPosition < 65) cipherPosition += 26;
        decodedMessage += String.fromCharCode(cipherPosition);
      }
    }
    if (this.directOrder) return decodedMessage;
    return decodedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
