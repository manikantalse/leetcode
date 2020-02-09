/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count = 0;
    if(n > 2){
        count = 1;
    }
    for(i=3; i< n;i+=2){
        for(var j=2; j<= Math.sqrt(i); j++){
            if(i % j == 0){
                break;
            }
        }
        if(j == parseInt(Math.sqrt(i)) + 1){
            count++;
        }
    }
    return count;
};
