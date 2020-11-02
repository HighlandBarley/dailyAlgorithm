// 两数之和
// 解体思路：双层循环
// 时间复杂度：n*n
// 空间复杂度：1
var twoSum = function(nums, target) {
    for(let i=0; i< nums.length-1; i++){
        for(let j=i+1; j< nums.length; j++){
            if(nums[i] + nums[j] == target) return [i,j];
        }
    }
};