const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newString = '';
  let currentCount = 1;
  console.log (' 1 - '+currentCount);
    for (let i = 0; i<= str.length; i++) {
      if (currentCount === 1 && str[i] !== str[i+1]) {
        newString += str[i];
        currentCount = 1;
        console.log(' 2 - '+newString);
      } else if (currentCount >1 && str[i] !== str[i+1]) {
        newString += currentCount + str[i];
        currentCount = 1;
        console.log(' 3 - '+newString);
      } else if (str[i] === str[i+1]) {
        currentCount ++;
        console.log(' 4 - '+newString);
        console.log(' 5 - '+currentCount);
    }
  }
  return newString;
  }
  console.log(encodeLine('vabaattbbbbbbbvtt'));

module.exports = {
  encodeLine
};
