// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.
//

function twoSum(nums, target) {
    const numbers = {};

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];

        if (numbers.hasOwnProperty(difference)) {
            return [numbers[difference], i];
        }

        numbers[nums[i]] = i;
    }

    return [];
}

const nums = [2,7,11,15];
const target = 9;
console.log(twoSum(nums, target));
