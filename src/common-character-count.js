const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let commonString = [];
 for (let i = 0; i<s1.length; i++) {
  console.log(`1 ${s1} ${i}`);
  for (let j = 0; j<s2.length; j++) {
    console.log(`2 ${i} ${j}`);
    if (s1[i] === s2[j]) {
      console.log(`3 ${s1[i]} ${s2[j]}`);
      commonString.push(s1[i]); 
      s1 = s1.replace(s1[i],''); i--
      s2 = s2.replace(s2[j],''); j--
      console.log(`4 ${commonString}`);
      break;
 }
}
}
return commonString.length;
}
module.exports = {
  getCommonCharacterCount
};
