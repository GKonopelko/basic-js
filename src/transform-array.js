const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr instanceof Array == false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (arr[i+1] == undefined) {continue};
      if (arr[i+1] === '--double-next') {continue};
      if (arr[i+1] === '--discard-next') {continue};
      if (arr[i+1] === '--double-prev') {continue};
      if (arr[i+1] === '--discard-prev') {continue};
      result.push(arr[i+1]);
      continue;
    };
    if (arr[i] === '--discard-next') {
      i++;
      continue;
    };
    if (arr[i] === '--double-prev') {
      console.log(`arri ${arr[i-1]}`);
      if (arr[i-1] == undefined) {console.log(`rsult ${result}`);continue};
      if (arr[i-2] === '--discard-next') {continue};
      if (arr[i-1] === '--double-next') {continue};
      if (arr[i-1] === '--discard-next') {continue};
      if (arr[i-1] === '--double-prev') {continue};
      if (arr[i-1] === '--discard-prev') {continue};
      result.push(arr[i-1]);
      // console.log(`rsult ${result}`);
      continue;
    };
    if (arr[i] === '--discard-prev') {
      if (arr[i-1] == undefined) {continue};
      if (arr[i-1] === '--discard-next') {continue};
      if (arr[i-1] === '--double-next') {continue};
      if (arr[i-1] === '--double-prev') {continue};
      if (arr[i-1] === '--discard-prev') {continue};
      if (arr[i-2] != '--discard-next') {result.pop()};
      continue;
    };
    result.push(arr[i]);
    
    // console.log(`result ${result}`);
  }
  return result;
}

module.exports = {
  transform
};
