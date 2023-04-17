const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        console.log(`  item {${i}, ${j}} - ${matrix[i][j]}`);
      }
    }
    let sumResults = [];
    let sum;
    
    for (j = 0; j < matrix[0].length; j++) {
      sum = matrix[0][j];
      console.log("1 - " + sum);
      for (i = 1; i < matrix.length; i++) {
        console.log("2 - " + matrix[i][j]);
        if (matrix[i-1][j] !== 0) {
        sum += matrix[i][j];
        console.log("3 - " + sum);
        }
      }
      console.log("4 - " + sum);
      sumResults.push(sum);
      console.log("5 - " + sumResults);
      
    };
    let total = sumResults.reduce((a, b) => a + b, 0);
      console.log("6 - " + total);
      return total;
      }
    
  

console.log(getMatrixElementsSum( [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
 ]))

module.exports = {
  getMatrixElementsSum
};
