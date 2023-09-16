/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0) return init;
  let a = 0;
  for(let i = 0;i < nums.length;i++){
      if(i === 0) a = fn(init,nums[i]);
      else a = fn(a,nums[i]); 
  }
  return a;
};