/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length > 1){
        k = k % nums.length;
        reverse(nums,0,nums.length-1);
        reverse(nums,0,k-1);
        reverse(nums,k,nums.length-1);   
    }
  };
  
  var reverse = function(nums,start,end){
      for(var i=start; i<=(start+end)/2;i++){
              var temp = nums[i];
              nums[i] = nums[start+end-i];
              nums[start+end-i] = temp;
      }
  };