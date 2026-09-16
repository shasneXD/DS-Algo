/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum=0;
    let count=0;
    let SumArr = new Map(); // (sum, count)
    SumArr.set(0,1);

   for(let i =0;i<nums.length;i++){
        sum+=nums[i];
        count+=SumArr.get(sum-k)??0
        SumArr.set(sum,(SumArr.get(sum)??0)+1)
   }
   return count
};

console.log(subarraySum([3,-1,1,2], 3))