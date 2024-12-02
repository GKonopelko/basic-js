const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value === null) value = 'null';
    if (value === undefined) value = '';
    this.result.push(value);
    console.log( `thisResultadd` + this.result);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.result.length) {
      console.log(`add`);
    this.result.splice(position - 1, 1);
    console.log(`thisResultRemove` + this.result);
    return this;
  }
  this.result = [];
    throw new Error("You can't remove incorrect link!")
  },
  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },
  finishChain() {
    const arr = this.result;
    const res = `( ${arr.join(" )~~( ")} )`;
    this.result = [];
    return res;
  }
};



module.exports = {
  chainMaker
};
