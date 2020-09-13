/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let kk = k;
  for(let i=0;i<k;i++){
    if(kk === 0){
      break;
    }else{
      num = nums[nums.length-1];
      nums.pop();
      nums.unshift(num);
      kk-=1;
    }
  }
  console.log(nums);
};

rotate([1,2,3,4,5,6,7],3);
