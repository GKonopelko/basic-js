const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let obj = {};
  domains.forEach(item => {
    item = item.split('.').reverse().join('.');
    // console.log(`item: ${item}`);
    let str = `.${item}`;
    let i = 0;
        do {
          arr.push(str);
          str = str.slice(0, str.lastIndexOf('.'))
          // console.log(`string: ${str}`);
          // console.log(`arrpushed: ${arr}`);
          i++;
          } 
          while (i <= str.split('.').length);
        // console.log(arr);
  }
  );
  arr = arr.sort(function(arg1, arg2) { return arg1.  length - arg2.length });
  // console.log(arr);
  arr.forEach((itm) => {
    // obj[itm] = itm;
    obj[itm] ? obj[itm] +=1 : obj[itm] = 1;
    // console.log(obj);
        });
        return obj;
}

module.exports = {
  getDNSStats
};
