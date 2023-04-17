const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    if (n.length !== 17) {
      return false
    }
    let arr = n.split('-');
    if (arr.length !== 6) {
      return false;
    }
    console.log("1   "+ arr);
    for (let i = 0; i<arr.length; i++) {
      console.log("2   "+ arr[i]);
      if (arr[i].length !== 2) {
      return false;
      }
      console.log("3   "+ arr[i][0]);
      if (arr[i][0] < 0 && arr[i][0] > 9) {
        return false;
      }
      console.log("4   "+ arr[i][0]);
      if (arr[i][1] < 0 && arr[i][0] > 9){
          return false;
      }
      console.log("5   "+ arr[i][1]);
      if (arr[i][0] < "A" && arr[i][0] > "F") {
        return false;
      }
      if (arr[i][1] < "A" && arr[i][0] > "F") {
          return false;
      }
      return true;
  }
}

module.exports = {
  isMAC48Address
};
