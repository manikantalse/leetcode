/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return "";
  } else if (strs[0].length == 0) {
    return "";
  } else if (strs.length == 1) {
    return strs[0];
  }
  for (var i = 0; i < strs[0].length; i++) {
    for (var j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        if (i == 0) {
          return "";
        } else {
          return strs[0].substr(0, i);
        }
      }
    }
  }
  return strs[0];
};
