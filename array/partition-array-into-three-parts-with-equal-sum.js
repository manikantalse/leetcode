/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  var target = 0,
    equalSum = 0,
    count = 0;
  for (var i = 0; i < A.length; i++) {
    target += A[i];
  }
  if (target % 3 !== 0) {
    return false;
  }
  target = target / 3;
  for (var i = 0; i < A.length; i++) {
    equalSum += A[i];
    if (equalSum === target) {
      count++;
      equalSum = 0;
    }
  }
  if (count === 3 && equalSum === 0) {
    return true;
  } else {
    return false;
  }
};
