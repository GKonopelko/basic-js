const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  let a = str.toString();
  console.log('1 - ' + a);
  let b = 0;
  if ('repeatTimes' in options) {
    b = options.repeatTimes.valueOf();
    console.log('2 - ' + b);
  };
  let c = '+';
  if ('separator' in options) {
   c = options.separator.toString();
    console.log('3 - ' + c);
  };
  let d = '';
  if ('addition' in options) {
    d = options.addition.toString();
  };
  let e = 0; 
  if ('additionRepeatTimes' in options) {
    e = options.additionRepeatTimes.valueOf();
  }
  let f ='|'; 
  if ('additionSeparator' in options) {
    f = options.additionSeparator.toString();
  }
    let add = '';
    if (e === 1) {
      add = `${d}`;
      console.log('4 - ' + add);
    } else if (e>1) {
      add = d+(f+d).repeat(e);
      console.log('5 - ' + add);
    }
  
    console.log('6 - ' + add);
    let result = a+add+(c+a+`${add}`).repeat(b-1);
    return result;
  }

module.exports = {
  repeater
};
