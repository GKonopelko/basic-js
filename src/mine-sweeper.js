const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newArr = JSON.parse(JSON.stringify(matrix));

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
        newArr[i][j]=0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`matrix ${[i]} ${[j]}`);
        
      if (i>0 && j>0 && matrix[i-1][j-1] == true) {
        newArr[i][j] += 1;
        console.log(`newArr1 ${newArr}`);
        };
        if (i>0 && matrix[i-1][j] == true) {
          newArr[i][j] += 1;
          console.log(`newArr1 ${newArr}`);
        };
        if (i>0 && j < matrix.length && matrix[i-1][j+1] == true) {
          newArr[i][j] += 1;
          console.log(`newArr1 ${newArr}`);
        };

        if (j>0 && matrix[i][j-1] == true) {
          newArr[i][j] += 1;
          console.log(`newArr1 ${newArr}`);
        };
        
        if (j < matrix.length-1 && matrix[i][j+1] == true) {
          newArr[i][j] += 1;
          console.log(`newArr1 ${newArr}`);
        };

        if (i<matrix.length-1 && j>0 && matrix[i+1][j-1] == true) {
          newArr[i][j] += 1;
        console.log(`newArr1 ${newArr}`);
        };
        if (i<matrix.length-1 && matrix[i+1][j] == true) {
          newArr[i][j] += 1;
          console.log(`newArr1 ${newArr}`);
        };
        if (i<matrix.length-1 && j < matrix.length-1 && matrix[i+1][j+1] == true) {
          newArr[i][j] += 1;
        console.log(`newArr1 ${newArr}`);
        };
      }

    }
    console.log(`newArr9 ${newArr}`);
       return newArr;
   }

module.exports = {
  minesweeper
};
