/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (Number.isInteger(Math.log10(n) / Math.log10(3))) {
    return true;
  }
  return false;
};
