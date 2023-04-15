const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix.length === 0) {
    return 0;
  };
    let catsNumber = 0;
  
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][i] === '^^' && matrix[j][i].length !== 0 ) {
          catsNumber +=1;
        }
      }
    }
      return catsNumber;
  }


module.exports = {
  countCats
};
