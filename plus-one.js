/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var count = 0;
    if(digits[digits.length-1] == 9){
        for(var i=digits.length-1; i >= 0; i--){
            if(digits[i] == 9){
                count++;
            } else{
                break;
            }
        }
        if(count == digits.length){
            digits[0] == 9 ? digits[0] = 1 : digits[0] += 1;
            digits.push(0);
            for(var i=1; i<digits.length;i++){
                digits[i] = 0;
            }
        } else {
            digits[digits.length-count-1] == 9 ?  digits[digits.length-count-1] = 1 : digits[digits.length-count-1] += 1;
            for(var i=digits.length-count; i < digits.length; i++){
                digits[i] = 0;
            }
        }
    } else {
        digits[digits.length-1] += 1; 
    }
    return digits;
};