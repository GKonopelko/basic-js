const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
const K = 0.693;

function dateSample(sampleActivity) {
  
  if (isNaN(sampleActivity) || typeof sampleActivity !== 'string') {
    return false
  };
  
  if (+sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY) {
   return false;
  };

  let activityNumber = +sampleActivity

  let age = ((Math.log2(MODERN_ACTIVITY/activityNumber)) *HALF_LIFE_PERIOD);
  console.log(('3:') + activityNumber);
  return Math.ceil(age);
 };

module.exports = {
  dateSample
};

