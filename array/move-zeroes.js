/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zCount = 0;
    for(var i=0; i< nums.length; i++){
        if(nums[i] === 0){
            zCount++;
        } else if(zCount){
            var temp = nums[i];
            nums[i] = nums[i-zCount];
            nums[i-zCount] = temp;
        }
    }
};