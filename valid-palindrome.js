/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi,'');
    s = s.toLowerCase();
    var len = s.length;
    for(var i=0; i<len/2; i++){
        if(s[i] != s[len-i-1]){
            break;
        } 
        if(i==parseInt(len/2)-1){
            return true;
        }
    }
    return len == 0 || len == 1;
};