let twoSumNumbers = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [nums[i], nums[j]]
            }
        }
    }
};

console.log(twoSumNumbers([15, 7, 11, 2], 18))
console.log(twoSumNumbers([3, 2, 4],6))