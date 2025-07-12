// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

function sortedSquares(nums) {
    let firstIndex = 0;
    let lastIndex = nums.length - 1;
    let result = new Array(nums.length);
    let insertIndex = nums.length - 1;

    while (firstIndex <= lastIndex) {
        let firstSquare = nums[firstIndex] * nums[firstIndex];
        let lastSquare = nums[lastIndex] * nums[lastIndex];

        if (firstSquare > lastSquare) {
            result[insertIndex] = firstSquare;
            firstIndex++;
        } else {
            result[insertIndex] = lastSquare;
            lastIndex--;
        }
        insertIndex--;
    }

    return result;
}

let nums = [-7,-3,2,3,11];
console.log(sortedSquares(nums));
