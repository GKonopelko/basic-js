const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  label: for (let i = 0; i < names.length; i++) {
    if (result.includes(names[i])) {
      for (let j = 1; j < names.length; j++) {
        if (result.includes(`${names[i]}(${j})`)) {
          continue;}
          result.push(`${names[i]}(${j})`);
          // console.log(`res2 ${result}`);
          continue label;
      };
    // console.log(`res3 ${result}`);
  } 
  result.push(names[i]);
  // console.log(`res4 ${result}`);
}
// console.log(`res5 ${result}`);
return result;
}

module.exports = {
  renameFiles
};
