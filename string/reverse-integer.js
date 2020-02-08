/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0, degree = 0;
    for(var i=x.toString().length-1; i >= 0; i--){
        if(x.toString()[i] == '-'){
            if(reverse < Math.pow(2,31)){
                return -reverse;
            } else {
                return 0;
            }
        }
        if(x.toString()[0] == '-'){
            degree = i-1;
        } else {
            degree = i;
        }
        reverse += parseInt(x.toString()[i]) * Math.pow(10,degree);
    }
    if(reverse < (Math.pow(2,31) -1)){
        return reverse;
    } else {
        return 0;
    }
};