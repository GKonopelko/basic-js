const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n<10) {return n};
  let nStr = String(n);
  let string1 = nStr.replace(nStr[0],"");
  let maxString = string1;
  console.log('1- '+string1);
  for (let i =1; i< nStr.length; i++) {
    let string2 = nStr.replace(nStr[i],"");
    console.log('2- '+string2);
    if (+string2 > +maxString) {
      maxString = +string2;
    }
  }
  console.log(maxString);
  return +maxString;
  }

module.exports = {
  deleteDigit
};
