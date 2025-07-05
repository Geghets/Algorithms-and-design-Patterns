// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums) {
    const numbersSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (numbersSet.has(nums[i])) {
            return true;
        }

        numbersSet.add(nums[i]);

    }

    return false;
}

let nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));
