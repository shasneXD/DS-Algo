var twoSum = function(nums,target){// 5= 2+ 3 (complement is 3, target is 5, num is 2)
    let SumArr= new Map() //we store (number,index)
    for(let i =0;i<nums.length;i++){
        needed = target - nums[i];
        if(SumArr.has(needed)){
            return [SumArr.get(needed),i]
        }
        SumArr.set(nums[i],i);
    }
    return [];
}

console.log(twoSum([1,1,2,4],2))
