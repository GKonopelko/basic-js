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
  
  let a = str;
  console.log('1 - ' + a);
  let b = 1;
  if ('repeatTimes' in options) {
    b = options.repeatTimes;
    console.log('2 - ' + b);
  };
  let c = '+';
  if ('separator' in options) {
   c = options.separator;
    console.log('3 - ' + c);
  };
  let d = '';
  if ('addition' in options) {
    d = options.addition;
  };
  let e = 1; 
  if ('additionRepeatTimes' in options) {
    e = options.additionRepeatTimes;
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
      add = d+((f+d).repeat(e-1));
      console.log('5 - ' + add);
    };
  
    console.log('6 - ' + add);
    let result;
    if (b === 0 || b === 1) {
      result = a+add;
    } else if (b>1) {
      result = a+add+(c+a+`${add}`).repeat(b-1);
    };
    return result;
  }

module.exports = {
  repeater
};
