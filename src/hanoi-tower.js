const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const obj = {};
  let turns = (2 ** disksNumber) - 1;
  console.log(turns);
  let time = Math.floor(turns / (turnsSpeed/3600));
  console.log(time);
  obj.turns = turns;
  obj.seconds = time;
  
  return obj;
}
console.log(calculateHanoi(15, 4522));

module.exports = {
  calculateHanoi
};
