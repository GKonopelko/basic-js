const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  arr.forEach(element => {
    if (element != -1) newArr.push(element);
    console.log(`newArr ${newArr}`);
  });
newArr = newArr.sort(compareNumbers).reverse();
function compareNumbers(a, b) {
  return a - b;
}
console.log(`newArr1 ${newArr}`);
console.log(`arrrrr ${arr}`);

let result = [];
arr.forEach(item => {
  console.log(`item1 ${item}`);
  item == -1 ? result.push(-1) : result.push(newArr.pop());
});
console.log(`arr3 ${arr}`);
console.log(`result ${result}`);
return result;
}

module.exports = {
  sortByHeight
};
