/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var countArr = []
    for(var i=0; i< nums.length; i++){
        if(countArr[nums[i]]){
            return true;
        } else {
            countArr[nums[i]] = 1;
        }
    }
    return false;
};